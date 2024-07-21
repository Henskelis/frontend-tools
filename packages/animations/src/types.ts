/**
 * An animation is a list of `Keyframe` objects
 */
export type Animation = Keyframe[];

/**
 * Options for a backing animation
 */
export type BackOptions = {
  /**
   * The direction to enter from (entrance animation) or exit to (exit animation)
   *
   * @defaultValue `top`
   */
  direction?: "top" | "bottom" | "left" | "right";
};

/**
 * Options for a bouncing animation
 */
export type BounceOptions = {
  /**
   * The direction to enter from (entrance animation) or exit to (exit animation)
   *
   * @defaultValue `center`
   */
  direction?: "center" | "top" | "bottom" | "left" | "right";
};

/**
 * Options for a flipping animation
 */
export type FlipOptions =
  | {
      /**
       * The axis to use for the flip
       */
      axis?: "x";

      /**
       * The direction of the flip
       *
       * `ttb` for top to bottom and `btt` for bottom to top
       *
       * @defaultValue `ttb`
       */
      direction?: "ttb" | "btt";
    }
  | {
      /**
       * The axis to use for the flip
       */
      axis?: "y";

      /**
       * The direction of the flip
       *
       * `ltr` for left to right and `rtl` for right to left
       *
       * @defaultValue `ltr`
       */
      direction?: "ltr" | "rtl";
    };

/**
 * Options for a rotating animation
 */
export type RotateOptions = {
  /**
   * The direction to enter from (entrance animation) or exit to (exit animation)
   *
   * @defaultValue `center`
   */
  direction?: "center" | "top" | "bottom" | "left" | "right";

  /**
   * The direction the rotation should be done
   *
   * @defaultValue `clockwise`
   */
  type?: "clockwise" | "counterclockwise";
};

/**
 * Options for a sliding animation
 */
export type SlideOptions = {
  /**
   * The direction to enter from (entrance animation) or exit to (exit animation)
   *
   * @defaultValue `top`
   */
  direction?: "top" | "bottom" | "left" | "right";
};
