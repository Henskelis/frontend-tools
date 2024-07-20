import type { Animation } from "../types";

/**
 * Entrance with a fading motion
 */
export const fadeEntrance: Animation = [
  {
    offset: 0,
    opacity: "0",
  },
  {
    offset: 1,
    opacity: "1",
  },
];
