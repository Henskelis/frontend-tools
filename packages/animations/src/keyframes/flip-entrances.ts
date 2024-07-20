import easingFunctions from "../easing-functions";
import type { Animation } from "../types";

const { easeIn } = easingFunctions;

/**
 * Entrance with a flipping motion on the X axis
 */
export const flipXEntrance: Animation = [
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
export const flipYEntrance: Animation = [
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
