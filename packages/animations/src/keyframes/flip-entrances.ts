import easingFunctions from "../easing-functions";

const { easeIn } = easingFunctions;

/**
 * Entrance with a flipping motion on the X axis
 */
export const flipXEntrance: Keyframe[] = [
  {
    offset: 0,
    easing: easeIn,
    transform: "perspective(500px) rotate3d(1, 0, 0, 90deg)",
    opacity: "0",
  },
  {
    offset: 0.2,
    opacity: "0.5",
  },
  {
    offset: 1,
    transform: "perspective(500px)",
    opacity: "1",
  },
];

/**
 * Entrance with a flipping motion on the Y axis
 */
export const flipYEntrance: Keyframe[] = [
  {
    offset: 0,
    easing: easeIn,
    transform: "perspective(500px) rotate3d(0, 1, 0, 90deg)",
    opacity: "0",
  },
  {
    offset: 0.2,
    opacity: "0.5",
  },
  {
    offset: 1,
    transform: "perspective(500px)",
    opacity: "1",
  },
];
