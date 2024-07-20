import type { Animation } from "../types";

/**
 * Exit from the top with a sliding motion
 */
export const slideTopExit: Animation = [
  {
    offset: 0,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
  {
    offset: 1,
    transform: "translate3d(0px, -100%, 0px)",
    opacity: "0",
  },
];

/**
 * Exit from the bottom with a sliding motion
 */
export const slideBottomExit: Animation = [
  {
    offset: 0,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 100%, 0px)",
    opacity: "0",
  },
];

/**
 * Exit from the left with a sliding motion
 */
export const slideLeftExit: Animation = [
  {
    offset: 0,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
  {
    offset: 1,
    transform: "translate3d(-100%, 0px, 0px)",
    opacity: "0",
  },
];

/**
 * Exit from the right with a sliding motion
 */
export const slideRightExit: Animation = [
  {
    offset: 0,
    transform: "translate3d(0px, 0px, 0px)",
    opacity: "1",
  },
  {
    offset: 1,
    transform: "translate3d(100%, 0px, 0px)",
    opacity: "0",
  },
];
