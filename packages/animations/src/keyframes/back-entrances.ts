import type { Animation } from "../types";

/**
 * Entrance from the top with a back motion
 */
export const backTopEntrance: Animation = [
  {
    offset: 0,
    transform: "translate3d(0px, -100%, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
  {
    offset: 0.8,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
];

/**
 * Entrance from the bottom with a back motion
 */
export const backBottomEntrance: Animation = [
  {
    offset: 0,
    transform: "translate3d(0px, 100%, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
  {
    offset: 0.8,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
];

/**
 * Entrance from the left with a back motion
 */
export const backLeftEntrance: Animation = [
  {
    offset: 0,
    transform: "translate3d(-100%, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
  {
    offset: 0.8,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
];

/**
 * Entrance from the right with a back motion
 */
export const backRightEntrance: Animation = [
  {
    offset: 0,
    transform: "translate3d(100%, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0",
  },
  {
    offset: 0.8,
    transform: "translate3d(0px, 0px, 0px) scale3d(0.7, 0.7, 0.7)",
    opacity: "0.7",
  },
  {
    offset: 1,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
];
