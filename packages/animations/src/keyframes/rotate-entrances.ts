import type { Animation, RotationDirection } from "../types";

/**
 * Entrance from the top with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateTopEntrance = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: [
      "translate3d(0px, -100%, 0px)",
      `rotate3d(0, 0, 1, ${direction === "clockwise" ? "-" : ""}120deg)`,
    ].join(" "),
    opacity: "0",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
];

/**
 * Entrance from the bottom with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateBottomEntrance = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: [
      "translate3d(0px, 100%, 0px)",
      `rotate3d(0, 0, 1, ${direction === "clockwise" ? "-" : ""}120deg)`,
    ].join(" "),
    opacity: "0",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
];

/**
 * Entrance from the left with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateLeftEntrance = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: [
      "translate3d(-100%, 0px, 0px)",
      `rotate3d(0, 0, 1, ${direction === "clockwise" ? "-" : ""}120deg)`,
    ].join(" "),
    opacity: "0",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
];

/**
 * Entrance from the right with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateRightEntrance = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: [
      "translate3d(100%, 0px, 0px)",
      `rotate3d(0, 0, 1, ${direction === "clockwise" ? "-" : ""}120deg)`,
    ].join(" "),
    opacity: "0",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
];

/**
 * Entrance from the center with a rotating motion
 *
 * @param direction - Direction of the rotation - default value is `clockwise`
 * @returns The animation
 */
export const rotateEntrance = (direction: RotationDirection = "clockwise"): Animation => [
  {
    offset: 0,
    transform: `rotate3d(0, 0, 1, ${direction === "clockwise" ? "" : "-"}200deg)`,
    opacity: "0",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
];
