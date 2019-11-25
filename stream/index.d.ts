declare class Stream {
  load_from_stream(
    that: Stream
  );

  load_from_file(
    path: string
  );

  get_string(): string;

  set_string(
    value: string
  );

  get_bytes(): number[];

  set_bytes(
    value: number[]
  );
}
