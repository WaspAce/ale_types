/**
 * Specifies a set of resizing styles for [[Splitter]].
 */
declare enum ResizeStyle {
  /**
   * Moving the splitter with the mouse has no effect.
   */
  rsNone = 0,

  /**
   * A line is drawn indicating the new position of the splitter
   * that would result if the user released the mouse at the current position.
   * The splitter does not actually move and no controls are resized.
   */
  rsLine = 1,

  /**
   * The control against which the splitter is aligned is resized based on
   * the current mouse position, and the splitter is moved to that position.
   */
  rsUpdate = 2,

  /**
   * A pattern is drawn indicating the new position of the splitter that would
   * result if the user released the mouse at the current position.
   * The splitter does not actually move and no controls are resized.
   */
  rsPattern = 3
}
