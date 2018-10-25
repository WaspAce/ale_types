declare class Monitor {
  /**
   * Index of the monitor.
   */
  readonly monitor_num: number;

  /**
   * The leftmost screen coordinate of the display.
   */
  readonly x: number;

  /**
   * The height of the display.
   */
  readonly height: number;

  /**
   * The topmost screen coordinate of the display.
   */
  readonly y: number;

  /**
   * The width of the display.
   */
  readonly width: number;

  /**
   * The logical dimensions of the monitor, within the desktop.
   */
  readonly bounds_rect: Rect;

  /**
   * The usable display area, excluding a taskbar etc.
   */
  readonly workarea_rect: Rect;

  /**
   * true if this is the primary monitor of the system.
   */
  readonly is_primary: boolean
}