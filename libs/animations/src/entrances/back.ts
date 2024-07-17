/**
 * Entrance from the top with a back motion
 */
export const entranceBackUp: Keyframe[] = [
	{
		offset: 0,
		transform: "translateT(1200px) scale(0.7)",
		opacity: "0.7",
	},
	{
		offset: 0.8,
		transform: "translateY(0px) scale(0.7)",
		opacity: "0.7",
	},
	{
		offset: 1,
		transform: "scale(1)",
		opacity: "1",
	},
];

/**
 * Entrance from the bottom with a back motion
 */
export const entranceBackDown: Keyframe[] = [
	{
		offset: 0,
		transform: "translateY(-1200px) scale(0.7)",
		opacity: "0.7",
	},
	{
		offset: 0.8,
		transform: "translateY(0px) scale(0.7)",
		opacity: "0.7",
	},
	{
		offset: 1,
		transform: "scale(1)",
		opacity: "1",
	},
];

/**
 * Entrance from the left with a back motion
 */
export const entranceBackLeft: Keyframe[] = [
	{
		offset: 0,
		transform: "translateX(-2000px) scale(0.7)",
		opacity: "0.7",
	},
	{
		offset: 0.8,
		transform: "translateX(0px) scale(0.7)",
		opacity: "0.7",
	},
	{
		offset: 1,
		transform: "scale(1)",
		opacity: "1",
	},
];

/**
 * Entrance from the right with a back motion
 */
export const entranceBackRight: Keyframe[] = [
	{
		offset: 0,
		transform: "translateX(2000px) scale(0.7)",
		opacity: "0.7",
	},
	{
		offset: 0.8,
		transform: "translateX(0px) scale(0.7)",
		opacity: "0.7",
	},
	{
		offset: 1,
		transform: "scale(1)",
		opacity: "1",
	},
];
