/**
 * An animation is a list of `Keyframe` objects
 */
export type Animation = Keyframe[];

/**
 * Direction of a flipping animation on the X axis
 *
 * ttb - Top to bottom
 * btt - Bottom to top
 */
export type FlipXDirection = "ttb" | "btt";

/**
 * Direction of a flipping animation on the Y axis
 *
 * ltr - Left to right
 * rtl - Right to left
 */
export type FlipYDirection = "ltr" | "rtl";

/**
 * Direction of a rotating animation
 */
export type RotationDirection = "clockwise" | "counterclockwise";
