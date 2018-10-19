/**
 * Class representing a V8 exception.
 */
declare class V8Exception {
  /**
   * @returns Returns the exception message.
   */
  get_message(): string;

  /**
   * @returns Returns the line of source code that the exception occurred within.
   */
  get_source_line(): string;

  /**
   * @returns Returns the resource name for the script from where the causing
   * the error originates.
   */
  get_script_resource_name(): string;
  
  /**
   * @returns Returns the 1-based number of the line where the error occurred or 0 if the
   * line number is unknown.
   */
  get_line_number(): number;
  
  /**
   * @returns Returns the index within the script of the first character where the error
   * occurred.
   */
  get_start_position(): number;
  
  /**
   * @returns Returns the index within the script of the last character where the error
   * occurred.
   */
  get_end_position(): number;

  /**
   * @returns Returns the index within the line of the first character where the error
   * occurred.
   */
  get_start_column(): number;
  
  /**
   * @returns Returns the index within the line of the last character where the error
   * occurred.
   */
  get_end_column(): number;
}