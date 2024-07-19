/**
 * Exit to the top with a back motion
 */
export const backTopExit: Keyframe[] = [
  {
    offset: 0,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.2,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "translate3d(0px, -100%, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
];

/**
 * Exit to the bottom with a back motion
 */
export const backBottomExit: Keyframe[] = [
  {
    offset: 0,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.2,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 100%, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
];

/**
 * Exit to the left with a back motion
 */
export const backLeftExit: Keyframe[] = [
  {
    offset: 0,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.2,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "translate3d(-100%, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
];

/**
 * Exit to the right with a back motion
 */
export const backRightExit: Keyframe[] = [
  {
    offset: 0,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.2,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "translate3d(100%, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
];
