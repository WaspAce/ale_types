declare class system {
  /**
   * Interval used to process GUI events.
   */
  static gui_loop_interval_ms: number;

  /**
   * true if ale runs in developer mode.
   */
  static readonly dev_mode: boolean;

  /**
   * true if current process is CEF cubprocess.
   */
  static readonly is_subprocess: boolean;

  /**
   * true if spidermonkey can collect garbage.
   */
  static can_gc: boolean;

  /**
   * Pause script execution for |interval_ms| milliseconds.
   * Does not pause asynchronous operations.
   */
  static sleep(
    interval_ms: number
  ): void;

  /**
   * @returns Return tick count.
   */
  static get_tick_count(): number;

  /**
   * Pause script execution until system.resume() called.
   * Does not pause asynchronous operations.
   */
  static pause(): void;

  /**
   * Resume script execution.
   */
  static resume(): void;

  /**
   * Exit script.
   */
  static exit(
    exit_code?: number,
    exit_message?: string
  ): void;

  /**
   * Read console input.
   */
  static read_ln(): string;

  /**
   * @returns Returns true if command line has given argument.
   */
  static cmd_has_switch(
    name: string
  ): boolean;

  /**
   * @returns Returns value of given command line argument.
   */
  static get_cmd_switch_value(
    name: string
  ): string;

  /**
   * Convert string to array of byte.
   */
  static bytes_of(
    value: string
  ): number[];

  /**
   * Convert byte array to string.
   */
  static string_of(
    bytes: number[]
  ): string;
}
