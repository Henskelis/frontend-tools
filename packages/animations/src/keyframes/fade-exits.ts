import type { Animation } from "../types";

/**
 * Exit with a fading motion
 */
export const fadeExit: Animation = [
  {
    offset: 0,
    opacity: "1",
  },
  {
    offset: 1,
    opacity: "0",
  },
];
