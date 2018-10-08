/**
 * Indicates whether a form is maximized, minimized, or normally sized.
 */
declare enum WindowState {
  /**
   * The form is in its normal state (that is, neither minimized nor maximized).
   */
  wsNormal = 0,
  
  /**
   * The form is minimized.
   */
  wsMinimized = 1,

  /**
   * The form is maximized.
   */
  wsMaximized = 2,

  /**
   * The form is in fullscreen mode.
   */
  wsFullScreen = 3
}
