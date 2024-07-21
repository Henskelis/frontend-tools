import type { Animation, RotationDirection } from "../types";

/**
 * Exit to the top with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateTopExit = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
  {
    offset: 1,
    transform: [
      "translate3d(0px, -100%, 0px)",
      `rotate3d(0, 0, 1, ${direction === "clockwise" ? "" : "-"}120deg)`,
    ].join(" "),
    opacity: "0",
  },
];

/**
 * Exit to the bottom with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateBottomExit = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
  {
    offset: 1,
    transform: [
      "translate3d(0px, 100%, 0px)",
      `rotate3d(0, 0, 1, ${direction === "clockwise" ? "" : "-"}120deg)`,
    ].join(" "),
    opacity: "0",
  },
];

/**
 * Exit to the left with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateLeftExit = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
  {
    offset: 1,
    transform: [
      "translate3d(-100%, 0px, 0px)",
      `rotate3d(0, 0, 1, ${direction === "clockwise" ? "" : "-"}120deg)`,
    ].join(" "),
    opacity: "0",
  },
];

/**
 * Exit to the right with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateRightExit = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
  {
    offset: 1,
    transform: [
      "translate3d(100%, 0px, 0px)",
      `rotate3d(0, 0, 1, ${direction === "clockwise" ? "" : "-"}120deg)`,
    ].join(" "),
    opacity: "0",
  },
];

/**
 * Exit to the center with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateExit = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
  {
    offset: 1,
    transform: `rotate3d(0, 0, 1, ${direction === "clockwise" ? "-" : ""}200deg)`,
    opacity: "0",
  },
];
