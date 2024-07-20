import type { Animation } from "../types";

/**
 * Exit to the top with a back motion
 */
export const backTopExit: Animation = [
  {
    offset: 0,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.2,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "translate3d(0px, -100%, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
];

/**
 * Exit to the bottom with a back motion
 */
export const backBottomExit: Animation = [
  {
    offset: 0,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.2,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "translate3d(0px, 100%, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
];

/**
 * Exit to the left with a back motion
 */
export const backLeftExit: Animation = [
  {
    offset: 0,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.2,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "translate3d(-100%, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
];

/**
 * Exit to the right with a back motion
 */
export const backRightExit: Animation = [
  {
    offset: 0,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.2,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "translate3d(100%, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
];
