"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EARTH_RADIUS_M = void 0;
exports.haversineM = haversineM;
exports.EARTH_RADIUS_M = 6371000;
const toRad = (d) => (d * Math.PI) / 180;
// same as the ride request distance function
function haversineM(lat1, lon1, lat2, lon2) {
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return exports.EARTH_RADIUS_M * c;
}
