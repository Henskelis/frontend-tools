import type { Animation, SlideOptions } from "../types";

/**
 * Entrance animation with a sliding motion
 *
 * @param options The slide options - default direction is `top`
 * @returns The slide entrance animation
 */
export const slideEntrance = (options?: SlideOptions): Animation => {
  if (!options) options = { direction: "top" };
  let { direction } = options;
  if (!direction) direction = "top";

  let startingTranslate: string;

  switch (direction) {
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

  return [
    {
      offset: 0,
      transform: startingTranslate,
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
 * Exit animation with a sliding motion
 *
 * @param options The slide options - default direction is `top`
 * @returns The slide exit animation
 */
export const slideExit = (options?: SlideOptions): Animation => {
  if (!options) options = { direction: "top" };
  let { direction } = options;
  if (!direction) direction = "top";

  let endingTranslate: string;

  switch (direction) {
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

  return [
    {
      offset: 0,
      transform: "translate3d(0px, 0px, 0px)",
      opacity: "1",
    },
    {
      offset: 1,
      transform: endingTranslate,
      opacity: "0",
    },
  ];
};
