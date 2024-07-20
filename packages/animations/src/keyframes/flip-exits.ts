import easingFunctions from "../easing-functions";
import type { Animation } from "../types";

const { easeOut } = easingFunctions;

/**
 * Exit with a flipping motion on the X axis
 */
export const flipXExit: Animation = [
  {
    offset: 0,
    transform: "perspective(500px)",
    opacity: "1",
  },
  {
    offset: 0.8,
    opacity: "0.5",
  },
  {
    offset: 1,
    easing: easeOut,
    transform: "perspective(500px) rotate3d(1, 0, 0, 90deg)",
    opacity: "0",
  },
];

/**
 * Exit with a flipping motion on the Y axis
 */
export const flipYExit: Animation = [
  {
    offset: 0,
    transform: "perspective(500px)",
    opacity: "1",
  },
  {
    offset: 0.8,
    opacity: "0.5",
  },
  {
    offset: 1,
    easing: easeOut,
    transform: "perspective(500px) rotate3d(0, 1, 0, 90deg)",
    opacity: "0",
  },
];
