"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIdToCustomerMap = getIdToCustomerMap;
exports.createRequest = createRequest;
exports.getRequest = getRequest;
exports.deleteRequest = deleteRequest;
exports.nearbyRequests = nearbyRequests;
const uuid_1 = require("uuid");
// ──────────────────────────────────────────────────────────────────────────────
// Note for someone who might work with this later
// byCustomer: customer_id → (request_id → request)
// idToCustomer: request_id → customer_id (to delete quickly by id)
// each customer get their own bucket (yes, right now, one customer can post multiple requests), and i decided to use this structure for flexibility
// ──────────────────────────────────────────────────────────────────────────────
const byCustomer = new Map();
const idToCustomer = new Map();
function getIdToCustomerMap() {
    return idToCustomer;
}
//get a bucket and create one if there is none that matches the cid
function getBucket(customerId) {
    let b = byCustomer.get(customerId);
    if (!b) {
        b = new Map();
        byCustomer.set(customerId, b);
    }
    return b;
}
// Haversine distance (meters)
function haversineM(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const toRad = (d) => (d * Math.PI) / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}
function createRequest(input) {
    const now = Date.now();
    const id = (0, uuid_1.v4)();
    const req = {
        id,
        customer_id: input.customer_id,
        requested_at: now,
        pickup: { lng: input.pickup_lng, lat: input.pickup_lat },
        dropoff: { lng: input.dropoff_lng, lat: input.dropoff_lat },
        service: input.service,
        note_to_driver: input.note_to_driver ?? null,
        fare: input.fare ?? null,
        distance_m: input.distance_m ?? null,
        assigned_driver_id: null,
    };
    const bucket = getBucket(req.customer_id);
    bucket.set(id, req);
    idToCustomer.set(id, req.customer_id);
    return req;
}
// helper (used by delete)
function getRequest(id) {
    const customerId = idToCustomer.get(id);
    if (!customerId)
        return null;
    const bucket = byCustomer.get(customerId);
    if (!bucket)
        return null;
    return bucket.get(id) ?? null;
}
function deleteRequest(id) {
    const customerId = idToCustomer.get(id);
    if (!customerId)
        return false;
    const bucket = byCustomer.get(customerId);
    if (!bucket)
        return false;
    const ok = bucket.delete(id);
    if (ok)
        idToCustomer.delete(id);
    // Optional: cleanup empty bucket
    if (ok && bucket.size === 0)
        byCustomer.delete(customerId);
    return ok;
}
// Nearby scan over all customers : O(N)
function nearbyRequests(lat, lng, radiusM) {
    const hits = [];
    for (const [, bucket] of byCustomer) {
        for (const r of bucket.values()) {
            const d = haversineM(lat, lng, r.pickup.lat, r.pickup.lng);
            if (d <= radiusM) {
                hits.push({
                    id: r.id,
                    customer_id: r.customer_id,
                    service: r.service,
                    fare: r.fare,
                    distance_m: r.distance_m,
                    requested_at: r.requested_at,
                    pickup_lng: r.pickup.lng,
                    pickup_lat: r.pickup.lat,
                    dropoff_lng: r.dropoff.lng,
                    dropoff_lat: r.dropoff.lat,
                    distance_to_driver_m: Math.round(d),
                });
            }
        }
    }
    hits.sort((a, b) => a.distance_to_driver_m - b.distance_to_driver_m);
    return hits.slice(0, 50); // 50 nearest for now
}
