declare class BinaryValue {
  constructor(
    data_bytes: number[]
  );

  readonly size: number;
  readonly is_valid: boolean;
  readonly is_owned: boolean;

  is_same(that: BinaryValue): boolean;
  is_equal(that: BinaryValue): boolean;
  copy(): BinaryValue;
  get_data(): number[];
}
