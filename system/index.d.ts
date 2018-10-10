declare class system {
  gui_loop_interval_ms: number;
  gc_interval_ms: number;

  static sleep(
    interval_ms: number
  ): void;
  static get_tick_count(): number;
  static pause(): void;
  static resume(): void;
  static exit(
    exit_code: number
  ): void;
  static read_ln(): string;
}
