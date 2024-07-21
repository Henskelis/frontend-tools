import easingFunctions from "../easing-functions";
import type { Animation, FlipXDirection, FlipYDirection } from "../types";

const { easeIn } = easingFunctions;

/**
 * Entrance with a flipping motion on the X axis
 *
 * @param direction - Direction of the flip motion - default value is `ttb`
 * @returns The animation
 */
export const flipXEntrance = (direction: FlipXDirection = "ttb"): Animation => [
  {
    offset: 0,
    easing: easeIn,
    transform: `perspective(500px) rotate3d(1, 0, 0, ${direction === "ttb" ? "" : "-"}90deg)`,
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
 *
 * @param direction - Direction of the flip motion - default value is `ltr`
 * @returns The animation
 */
export const flipYEntrance = (direction: FlipYDirection = "ltr"): Animation => [
  {
    offset: 0,
    easing: easeIn,
    transform: `perspective(500px) rotate3d(0, 1, 0, ${direction === "ltr" ? "-" : ""}90deg)`,
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
