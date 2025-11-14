const userSocketIds: Map<string, Set<string>> = new Map();

export function registerSocketSession(userId: string, socketId: string) {
	let sockets = userSocketIds.get(userId);
	if (!sockets) {
		sockets = new Set();
		userSocketIds.set(userId, sockets);
	}
	sockets.add(socketId);
}

export function unregisterSocketSession(userId: string, socketId: string) {
	const sockets = userSocketIds.get(userId);
	if (sockets) {
		sockets.delete(socketId);
		if (sockets.size === 0) {
			userSocketIds.delete(userId);
		}
	}
}

export function getUserSocketIds(userId: string): Set<string> | null {
	return userSocketIds.get(userId) || null;
}
