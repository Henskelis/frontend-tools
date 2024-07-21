import easingFunctions from "../easing-functions";
import type { Animation, FlipOptions } from "../types";

const { easeIn, easeOut } = easingFunctions;

/**
 * Entrance animation with a flipping motion
 *
 * @param options The flip options - default axis is `x` with a `ttb` direction (top to bottom)
 * @returns The flip entrance animation
 */
export const flipEntrance = (options?: FlipOptions): Animation => {
  if (!options) options = { axis: "x", direction: "ttb" };
  let { axis, direction } = options;

  if (!axis) axis = "x";
  if (!direction) direction = axis === "x" ? "ttb" : "ltr";
  let startingRotate: string;

  if (axis === "x") {
    startingRotate = `rotate3d(1, 0, 0, ${direction === "ttb" ? "" : "-"}90deg)`;
  } else {
    startingRotate = `rotate3d(0, 1, 0, ${direction === "ltr" ? "-" : ""}90deg)`;
  }

  return [
    {
      offset: 0,
      easing: easeIn,
      transform: ["perspective(500px)", startingRotate].join(" "),
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
};

/**
 * Exit animation with a flipping motion.
 *
 * @param options The flip options - default axis is `x` with a `ttb` direction (top to bottom)
 * @returns The flip entrance animation
 */
export const flipExit = (options?: FlipOptions): Animation => {
  if (!options) options = { axis: "x", direction: "ttb" };
  let { axis, direction } = options;

  if (!axis) axis = "x";
  if (!direction) direction = axis === "x" ? "ttb" : "ltr";
  let endingRotate: string;

  if (axis === "x") {
    endingRotate = `rotate3d(1, 0, 0, ${direction === "ttb" ? "-" : ""}90deg)`;
  } else {
    endingRotate = `rotate3d(0, 1, 0, ${direction === "ltr" ? "" : "-"}90deg)`;
  }

  return [
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
      transform: ["perspective(500px)", endingRotate].join(" "),
      opacity: "0",
    },
  ];
};
