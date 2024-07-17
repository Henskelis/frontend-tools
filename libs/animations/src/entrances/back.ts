/**
 * Entrance from the top with a back motion
 */
export const entranceBackUp: Keyframe[] = [
	{
		offset: 0,
		transform: "translate3d(0px, 1200px, 0px) scale3d(0.7, 0.7, 0.7)",
		opacity: "0.7",
	},
	{
		offset: 0.8,
		transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
		opacity: "0.7",
	},
	{
		offset: 1,
		transform: "scale3d(1, 1, 1)",
		opacity: "1",
	},
];

/**
 * Entrance from the bottom with a back motion
 */
export const entranceBackDown: Keyframe[] = [
	{
		offset: 0,
		transform: "translate3d(0px, -1200px, 0px) scale3d(0.7, 0.7, 0.7)",
		opacity: "0.7",
	},
	{
		offset: 0.8,
		transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
		opacity: "0.7",
	},
	{
		offset: 1,
		transform: "scale3d(1, 1, 1)",
		opacity: "1",
	},
];

/**
 * Entrance from the left with a back motion
 */
export const entranceBackLeft: Keyframe[] = [
	{
		offset: 0,
		transform: "translate3d(-2000px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
		opacity: "0.7",
	},
	{
		offset: 0.8,
		transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
		opacity: "0.7",
	},
	{
		offset: 1,
		transform: "scale3d(1, 1, 1)",
		opacity: "1",
	},
];

/**
 * Entrance from the right with a back motion
 */
export const entranceBackRight: Keyframe[] = [
	{
		offset: 0,
		transform: "translate3d(2000px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
		opacity: "0.7",
	},
	{
		offset: 0.8,
		transform: "translate3d(0px, 0px 0px) scale3d(0.7, 0.7, 0.7)",
		opacity: "0.7",
	},
	{
		offset: 1,
		transform: "scale3d(1, 1, 1)",
		opacity: "1",
	},
];
