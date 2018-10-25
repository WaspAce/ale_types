declare class screen {
  /**
   * 
   */
  static readonly monitor_count: number;


  /**
   * 
   * @param point 
   */
  static get_monitor_from_point(
    point: Point
  ): Monitor;

  /**
   * 
   * @param index 
   */
  static get_monitor(
    index: number
  ): Monitor
}