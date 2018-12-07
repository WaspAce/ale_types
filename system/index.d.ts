declare class system {
  static gui_loop_interval_ms: number;
  static gc_interval_ms: number;
  static readonly dev_mode: boolean;

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
}
