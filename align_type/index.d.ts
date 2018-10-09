/**
 * Specifies the alignment of a control within its parent
 */
declare enum AlignType {
  /**
   * The control remains where it was placed. This is the default value.
   */
  alNone = 0,
  /**
   * The control moves to the top of its parent and resizes to fill the width of its parent. The height of the control is not affected.
   */
  alTop = 1,
  /**
   * The control moves to the bottom of its parent and resizes to fill the width of its parent. The height of the control is not affected.
   */
  alBottom = 2,
  /**
   * The control moves to the left side of its parent and resizes to fill the height of its parent. The width of the control is not affected.
   */
  alLeft = 3,
  /**
   * The control moves to the right side of its parent and resizes to fill the height of its parent. The width of the control is not affected.
   */
  alRight = 4,
  /**
   * The control resizes to fill the client area of its parent. If another control already occupies part of the client area, the control resizes to fit within the remaining client area
   */
  alClient = 5,
  /**
   * TODO
   */
  alCustom = 6
}