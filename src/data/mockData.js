export const mockBundles = {
	"12": {
		user: {
			id: 12,
			firstName: "Mock Karl",
			lastName: "Dovineau",
			age: 31,
			score: 0.12,
			keyData: {
				calorieCount: 1930,
				proteinCount: 155,
				carbohydrateCount: 290,
				lipidCount: 50,
			},
		},
		activity: [
			{ day: "2025-09-01", kilogram: 80, calories: 240 },
			{ day: "2025-09-02", kilogram: 80, calories: 220 },
			{ day: "2025-09-03", kilogram: 79, calories: 280 },
			{ day: "2025-09-04", kilogram: 79, calories: 290 },
			{ day: "2025-09-05", kilogram: 78, calories: 160 },
			{ day: "2025-09-06", kilogram: 78, calories: 162 },
			{ day: "2025-09-07", kilogram: 78, calories: 390 },
		],
		sessions: [
			{ day: 1, sessionLength: 30 },
			{ day: 2, sessionLength: 23 },
			{ day: 3, sessionLength: 45 },
			{ day: 4, sessionLength: 50 },
			{ day: 5, sessionLength: 0 },
			{ day: 6, sessionLength: 0 },
			{ day: 7, sessionLength: 60 },
		],
		performance: [
			{ kind: "cardio", value: 80 },
			{ kind: "energy", value: 120 },
			{ kind: "endurance", value: 140 },
			{ kind: "strength", value: 50 },
			{ kind: "speed", value: 200 },
			{ kind: "intensity", value: 90 },
		],
	},
	"18": {
		user: {
			id: 18,
			firstName: "Mock Cecilia",
			lastName: "Ratorez",
			age: 34,
			score: 0.3,
			keyData: {
				calorieCount: 2500,
				proteinCount: 90,
				carbohydrateCount: 150,
				lipidCount: 120,
			},
		},
		activity: [
			{ day: "2025-09-01", kilogram: 62, calories: 120 },
			{ day: "2025-09-02", kilogram: 62, calories: 180 },
			{ day: "2025-09-03", kilogram: 61, calories: 90 },
			{ day: "2025-09-04", kilogram: 61, calories: 160 },
			{ day: "2025-09-05", kilogram: 61, calories: 120 },
			{ day: "2025-09-06", kilogram: 60, calories: 220 },
			{ day: "2025-09-07", kilogram: 60, calories: 340 },
		],
		sessions: [
			{ day: 1, sessionLength: 40 },
			{ day: 2, sessionLength: 45 },
			{ day: 3, sessionLength: 50 },
			{ day: 4, sessionLength: 30 },
			{ day: 5, sessionLength: 30 },
			{ day: 6, sessionLength: 50 },
			{ day: 7, sessionLength: 60 },
		],
		performance: [
			{ kind: "cardio", value: 200 },
			{ kind: "energy", value: 240 },
			{ kind: "endurance", value: 80 },
			{ kind: "strength", value: 80 },
			{ kind: "speed", value: 220 },
			{ kind: "intensity", value: 110 },
		],
	},
};

export function hasMock(userId) {
	const k = String(userId);
	return Object.prototype.hasOwnProperty.call(mockBundles, k);
}

export function getMockBundle(userId) {
	return mockBundles[String(userId)] || null;
}

