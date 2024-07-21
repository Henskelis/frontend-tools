import type { Animation, RotateOptions } from "../types";

/**
 * Entrance animation with a rotating motion
 *
 * @param options The rotate options - default direction is `center` with a `clockwise` rotation
 * @returns The rotate entrance animation
 */
export const rotateEntrance = (options?: RotateOptions): Animation => {
  if (!options) options = { direction: "center", type: "clockwise" };
  let { direction, type } = options;
  if (!direction) direction = "center";
  if (!type) type = "clockwise";

  let startingTranslate: string;
  let startingRotate: string;

  switch (direction) {
    case "center":
      startingTranslate = "translate3d(0px, 0px, 0px)";
      break;
    case "top":
      startingTranslate = "translate3d(0px, -100%, 0px)";
      break;
    case "bottom":
      startingTranslate = "translate3d(0px, 100%, 0px)";
      break;
    case "left":
      startingTranslate = "translate3d(-100%, 0px, 0px)";
      break;
    case "right":
      startingTranslate = "translate3d(100%, 0px, 0px)";
      break;
    default:
      throw new Error(`Invalid direction "${direction}"`);
  }

  if (direction === "center") {
    startingRotate = `rotate3d(0, 0, 1, ${type === "clockwise" ? "-" : ""}200deg)`;
  } else {
    startingRotate = `rotate3d(0, 0, 1, ${type === "clockwise" ? "-" : ""}120deg)`;
  }

  return [
    {
      offset: 0,
      transform: [startingTranslate, startingRotate].join(" "),
      opacity: "0",
    },
    {
      offset: 1,
      transform: "translate3d(0px, 0px, 0px)",
      opacity: "1",
    },
  ];
};

/**
 * Exit animation with a rotating motion
 *
 * @param options The rotate options - default direction is `center` with a `clockwise` rotation
 * @returns The rotate exit animation
 */
export const rotateExit = (options?: RotateOptions): Animation => {
  if (!options) options = { direction: "center", type: "clockwise" };
  let { direction, type } = options;
  if (!direction) direction = "center";
  if (!type) type = "clockwise";

  let endingTranslate: string;
  let endingRotate: string;

  switch (direction) {
    case "center":
      endingTranslate = "translate3d(0px, 0px, 0px)";
      break;
    case "top":
      endingTranslate = "translate3d(0px, -100%, 0px)";
      break;
    case "bottom":
      endingTranslate = "translate3d(0px, 100%, 0px)";
      break;
    case "left":
      endingTranslate = "translate3d(-100%, 0px, 0px)";
      break;
    case "right":
      endingTranslate = "translate3d(100%, 0px, 0px)";
      break;
    default:
      throw new Error(`Invalid direction "${direction}"`);
  }

  if (direction === "center") {
    endingRotate = `rotate3d(0, 0, 1, ${type === "clockwise" ? "" : "-"}200deg)`;
  } else {
    endingRotate = `rotate3d(0, 0, 1, ${type === "clockwise" ? "" : "-"}120deg)`;
  }

  return [
    {
      offset: 0,
      transform: "translate3d(0px, 0px, 0px)",
      opacity: "1",
    },
    {
      offset: 1,
      transform: [endingTranslate, endingRotate].join(" "),
      opacity: "0",
    },
  ];
};
