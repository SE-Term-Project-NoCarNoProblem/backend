import { logger } from "./logger";

/**
 * Reverse geocode coordinates to a human-readable address using Nominatim (OpenStreetMap)
 * Free service with no API key required, but rate-limited
 */
export async function reverseGeocode(
	lat: number,
	lng: number
): Promise<string> {
	try {
		const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;

		const response = await fetch(url, {
			headers: {
				"User-Agent": "NoCarNoProblem-RideApp/1.0",
			},
		});

		if (!response.ok) {
			logger.warn(`Geocoding API error: ${response.status}`);
			return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
		}

		const data = (await response.json()) as any;

		if (data.error) {
			logger.warn(`Geocoding error: ${data.error}`);
			return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
		}

		// Build a readable address from components
		const address = data.address || {};
		const parts: string[] = [];

		// Add road/street
		if (address.road) parts.push(address.road);

		// Add neighbourhood or suburb
		if (address.neighbourhood) parts.push(address.neighbourhood);
		else if (address.suburb) parts.push(address.suburb);

		// Add city/district
		if (address.city) parts.push(address.city);
		else if (address.town) parts.push(address.town);
		else if (address.municipality) parts.push(address.municipality);

		// If we have a display_name but no parts, use it
		if (parts.length === 0 && data.display_name) {
			// Take first 3 parts of display_name
			const displayParts = data.display_name.split(",").slice(0, 3);
			return displayParts.join(",").trim();
		}

		// Return formatted address or fallback to coordinates
		return parts.length > 0
			? parts.join(", ")
			: `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
	} catch (error) {
		logger.error("Error in reverse geocoding", { error, lat, lng });
		return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
	}
}

/**
 * Batch reverse geocode multiple coordinates with delay to respect rate limits
 */
export async function batchReverseGeocode(
	coordinates: Array<{ lat: number; lng: number }>
): Promise<string[]> {
	const results: string[] = [];

	for (let i = 0; i < coordinates.length; i++) {
		const { lat, lng } = coordinates[i];
		const address = await reverseGeocode(lat, lng);
		results.push(address);

		// Add delay between requests to respect Nominatim rate limit (1 req/sec)
		if (i < coordinates.length - 1) {
			await new Promise((resolve) => setTimeout(resolve, 1000));
		}
	}

	return results;
}
