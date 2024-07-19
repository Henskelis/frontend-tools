/**
 * Entrance from the top with a sliding motion
 */
export const slideTopEntrance: Keyframe[] = [
  {
    offset: 0,
    transform: "translate3d(0px, -100%, 0px)",
    opacity: "0",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
];

/**
 * Entrance from the bottom with a sliding motion
 */
export const slideBottomEntrance: Keyframe[] = [
  {
    offset: 0,
    transform: "translate3d(0px, 100%, 0px)",
    opacity: "0",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
];

/**
 * Entrance from the left with a sliding motion
 */
export const slideLeftEntrance: Keyframe[] = [
  {
    offset: 0,
    transform: "translate3d(-100%, 0px, 0px)",
    opacity: "0",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
];

/**
 * Entrance from the right with a sliding motion
 */
export const slideRightEntrance: Keyframe[] = [
  {
    offset: 0,
    transform: "translate3d(100%, 0px, 0px)",
    opacity: "0",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
];
