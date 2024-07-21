import easingFunctions from "../easing-functions";
import type { Animation, FlipXDirection, FlipYDirection } from "../types";

const { easeOut } = easingFunctions;

/**
 * Exit with a flipping motion on the X axis
 *
 * @param direction - Direction of the flip motion - default value is `ttb`
 * @returns The animation
 */
export const flipXExit = (direction: FlipXDirection = "ttb"): Animation => [
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
    transform: `perspective(500px) rotate3d(1, 0, 0, ${direction === "ttb" ? "-" : ""}90deg)`,
    opacity: "0",
  },
];

/**
 * Exit with a flipping motion on the Y axis
 *
 * @param direction - Direction of the flip motion - default value is `ltr`
 * @returns The animation
 */
export const flipYExit = (direction: FlipYDirection = "ltr"): Animation => [
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
    transform: `perspective(500px) rotate3d(0, 1, 0, ${direction === "ltr" ? "" : "-"}90deg)`,
    opacity: "0",
  },
];
