import easingFunctions from "../easing-functions";

const { easeOutCubic } = easingFunctions;

/**
 * Entrance from the top with a bouncing motion
 */
export const bounceTopEntrance: Keyframe[] = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "translate3d(0px, -100%, 0px) scale3d(1, 1.5, 1)",
    opacity: "0",
  },
  {
    offset: 0.6,
    easing: easeOutCubic,
    transform: "translate3d(0px, 10%, 0px) scale3d(1, 0.75, 1)",
    opacity: "0.8",
  },
  {
    offset: 0.75,
    easing: easeOutCubic,
    transform: "translate3d(0px, -5%, 0px) scale3d(1, 0.9, 1)",
    opacity: "1",
  },
  {
    offset: 0.9,
    easing: easeOutCubic,
    transform: "translate3d(0px, 2.5%, 0px) scale3d(1, 0.97, 1)",
    opacity: "1",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
    opacity: "1",
  },
];

/**
 * Entrance from the bottom with a bouncing motion
 */
export const bounceBottomEntrance: Keyframe[] = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "translate3d(0px, 100%, 0px) scale3d(1, 2, 1)",
    opacity: "0",
  },
  {
    offset: 0.6,
    easing: easeOutCubic,
    transform: "translate3d(0px, -10%, 0px) scale3d(1, 0.75, 1)",
    opacity: "0.8",
  },
  {
    offset: 0.75,
    easing: easeOutCubic,
    transform: "translate3d(0px, 5%, 0px) scale3d(1, 0.9, 1)",
    opacity: "1",
  },
  {
    offset: 0.9,
    easing: easeOutCubic,
    transform: "translate3d(0px, -2.5%, 0px) scale3d(1, 0.97, 1)",
    opacity: "1",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
    opacity: "1",
  },
];

/**
 * Entrance from the left with a bouncing motion
 */
export const bounceLeftEntrance: Keyframe[] = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "translate3d(-100%, 0px, 0px) scale3d(2, 1, 1)",
    opacity: "0",
  },
  {
    offset: 0.6,
    easing: easeOutCubic,
    transform: "translate3d(10%, 0px, 0px) scale3d(0.75, 1, 1)",
    opacity: "0.8",
  },
  {
    offset: 0.75,
    easing: easeOutCubic,
    transform: "translate3d(-5%, 0px, 0px) scale3d(0.9, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.9,
    easing: easeOutCubic,
    transform: "translate3d(2.5%, 0px, 0px) scale3d(0.97, 1, 1)",
    opacity: "1",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
    opacity: "1",
  },
];

/**
 * Entrance from the right with a bouncing motion
 */
export const bounceRightEntrance: Keyframe[] = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "translate3d(100%, 0px, 0px) scale3d(2, 1, 1)",
    opacity: "0",
  },
  {
    offset: 0.6,
    easing: easeOutCubic,
    transform: "translate3d(-10%, 0px, 0px) scale3d(0.75, 1, 1)",
    opacity: "0.8",
  },
  {
    offset: 0.75,
    easing: easeOutCubic,
    transform: "translate3d(5%, 0px, 0px) scale3d(0.9, 1, 1)",
    opacity: "1",
  },
  {
    offset: 0.9,
    easing: easeOutCubic,
    transform: "translate3d(-2.5%, 0px, 0px) scale3d(0.97, 1, 1)",
    opacity: "1",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1)",
    opacity: "1",
  },
];

/**
 * Entrance from the center with a bouncing motion
 */
export const bounceEntrance: Keyframe[] = [
  {
    offset: 0,
    easing: easeOutCubic,
    transform: "scale3d(0.5, 0.5, 0.5)",
    opacity: "0",
  },
  {
    offset: 0.2,
    easing: easeOutCubic,
    transform: "scale3d(1.1, 1.1, 1.1)",
    opacity: "0.8",
  },
  {
    offset: 0.4,
    easing: easeOutCubic,
    transform: "scale3d(0.9, 0.9, 0.9)",
    opacity: "1",
  },
  {
    offset: 0.6,
    easing: easeOutCubic,
    transform: "scale3d(1.05, 1.05, 1.05)",
    opacity: "1",
  },
  {
    offset: 0.8,
    easing: easeOutCubic,
    transform: "scale3d(0.98, 0.98, 0.98)",
    opacity: "1",
  },
  {
    offset: 1,
    easing: easeOutCubic,
    transform: "scale3d(1, 1, 1)",
    opacity: "1",
  },
];
