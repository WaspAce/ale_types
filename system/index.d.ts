declare class system {
  static gui_loop_interval_ms: number;
  static gc_interval_ms: number;
  static readonly dev_mode: boolean;

  /**
   * Called to resolve domain name to IP address.
   * @event
   */
  static on_resolve_domain:
  /**
   * @return Return IP address or empty string to use defautl implementation.
   */
  (
      domain: string
  ) => string;

  static sleep(
    interval_ms: number
  ): void;
  static get_tick_count(): number;
  static pause(): void;
  static resume(): void;
  static exit(
    exit_code?: number,
    exit_message?: string
  ): void;
  static read_ln(): string;
  static cmd_has_switch(
    name: string
  ): boolean;
  static get_cmd_switch_value(
    name: string
  ): string;
  static bytes_of(
    value: string
  ): number[];
  static string_of(
    bytes: number[]
  ): string;

  /**
   * @returns Returns IP address of given domain.
   */
  static resolve_domain(
    domain: string
  ): string;
}
