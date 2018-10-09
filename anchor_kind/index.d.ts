/**
 * Specifies how a control is anchored to its parent.
 */
declare enum AnchorKind {
  /**
   * Distance between the top edge of the control's parent and the top edge of the control is maintained constant.
   */
  akTop = 0,
  /**
   * Distance between the left edge of the control's parent and the left edge of the control is maintained constant.
   */
  akLeft = 1,
  /**
   * Distance between the right edge of the control's parent and the right edge of the control is maintained constant.
   */
  akRight = 2,
  /**
   * Distance between the bottom edge of the control's parent and the bottom edge of the control is maintained constant.
   */
  akBottom = 3
}
