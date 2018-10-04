/**
 * Structure representing a binary value.
 */
declare class BinaryValue {
  /**
   * 
   * @param data_bytes array of bytes to set to value.
   */
  constructor(
    data_bytes: number[]
  );

  /**
   * Data size.
   */
  readonly size: number;

  /**
   * true if this object is valid. This object may become invalid if
   * the underlying data is owned by another object (e.g. list or dictionary)
   * and that other object is then modified or destroyed. Do not call any other
   * functions if this is false.
   */
  readonly is_valid: boolean;

  /**
   * true if this object is currently owned by another object.
   */
  readonly is_owned: boolean;

  /**
   * Returns true if this object and **that** object have the same underlying
   * data.
   */
  is_same(that: BinaryValue): boolean;

  /**
   * Returns true if this object and **that** object have an equivalent
   * underlying value but are not necessarily the same object.
   */
  is_equal(that: BinaryValue): boolean;

  /**
   * Returns a copy of this object. The data in this object will also be copied.
   */
  copy(): BinaryValue;

  /**
   * Read up to **buffer_size** number of bytes. Reading begins at
   * the specified byte **data_offset**.
   * @returns read bytes.
   */
  get_data(buffer_size: number, data_offset: number): number[];
}
