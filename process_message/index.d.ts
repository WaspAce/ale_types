declare class ProcessMessage {
  /**
   * Create a new [[ProcessMessage]] object with the specified name.
   */
  constructor(
    name: string
  )

  /**
   * true if this object is valid. Do not call any other functions if this is false.
   */
  readonly is_valid: boolean;

  /**
   * true if the values of this object are read-only. Some APIs may
	 * expose read-only objects.
   */
  readonly is_read_only: boolean;

  /**
   * The message name.
   */
  readonly name: string;


  /**
   * @returns Returns the list of arguments.
   */
  get_argument_list(): ListValue;

  /**
   * @returns Returns a writable copy of this object.
   */
  copy(): ProcessMessage;
}
