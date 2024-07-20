import easingFunctions from "../easing-functions";
import type { Animation } from "../types";

const { easeOutCubic } = easingFunctions;

/**
 * Exit to the top with a bouncing motion
 */
export const bounceTopExit: Animation = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.1,
    easing: easeOutCubic,
    transform: "translate3d(0px, 2.5%, 0px) scale3d(1, 0.97, 1)",
    opacity: "1",
  },
  {
    offset: 0.25,
    easing: easeOutCubic,
    transform: "translate3d(0px, -5%, 0px) scale3d(1, 0.97, 1)",
    opacity: "1",
  },
  {
    offset: 0.4,
    easing: easeOutCubic,
    transform: "translate3d(0px, 10%, 0px) scale3d(1, 0.75, 1)",
    opacity: "0.5",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "translate3d(0px, -100%, 0px) scale3d(1, 1.5, 1)",
    opacity: "0",
  },
];

/**
 * Exit to the bottom with a bouncing motion
 */
export const bounceBottomExit: Animation = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.1,
    easing: easeOutCubic,
    transform: "translate3d(0px, -2.5%, 0px) scale3d(1, 0.97, 1)",
    opacity: "1",
  },
  {
    offset: 0.25,
    easing: easeOutCubic,
    transform: "translate3d(0px, 5%, 0px) scale3d(1, 0.9, 1)",
    opacity: "1",
  },
  {
    offset: 0.4,
    easing: easeOutCubic,
    transform: "translate3d(0px, -10%, 0px) scale3d(1, 0.75, 1)",
    opacity: "0.5",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "translate3d(0px, 100%, 0px) scale3d(1, 1.5, 1)",
    opacity: "0",
  },
];

/**
 * Exit to the left with a bouncing motion
 */
export const bounceLeftExit: Animation = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.1,
    easing: easeOutCubic,
    transform: "translate3d(2.5%, 0px, 0px) scale3d(0.97, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.25,
    easing: easeOutCubic,
    transform: "translate3d(-5%, 0px, 0px) scale3d(0.9, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.4,
    easing: easeOutCubic,
    transform: "translate3d(10%, 0px, 0px) scale3d(0.75, 1, 1)",
    opacity: "0.5",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "translate3d(-100%, 0px, 0px) scale3d(1.5, 1, 1)",
    opacity: "0",
  },
];

/**
 * Exit to the right with a bouncing animation
 */
export const bounceRightExit: Animation = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.1,
    easing: easeOutCubic,
    transform: "translate3d(-2.5%, 0px, 0px) scale3d(0.97, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.25,
    easing: easeOutCubic,
    transform: "translate3d(5%, 0px, 0px) scale3d(0.9, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.4,
    easing: easeOutCubic,
    transform: "translate3d(-10%, 0px, 0px) scale3d(0.75, 1, 1)",
    opacity: "0.5",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "translate3d(100%, 0px, 0px) scale3d(1.5, 1, 1)",
    opacity: "0",
  },
];

/**
 * Exit to the center with a bouncing motion
 */
export const bounceExit: Animation = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.2,
    easing: easeOutCubic,
    transform: "scale3d(0.98, 0.98, 0.98)",
    opacity: "1",
  },
  {
    offset: 0.4,
    easing: easeOutCubic,
    transform: "scale3d(1.05, 1.05, 1.05)",
    opacity: "1",
  },
  {
    offset: 0.6,
    easing: easeOutCubic,
    transform: "scale3d(0.9, 0.9, 0.9)",
    opacity: "1",
  },
  {
    offset: 0.8,
    easing: easeOutCubic,
    transform: "scale3d(1.1, 1.1, 1.1)",
    opacity: "0.8",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "scale3d(0.5, 0.5, 0.5)",
    opacity: "0",
  },
];
