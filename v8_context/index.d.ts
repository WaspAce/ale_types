declare interface V8ContextEvalResult {
  result: boolean
  ret_val: V8Value,
  exception: V8Exception
}

/**
 * Structure representing a V8 context handle.
 */
declare class V8Context {
  /**
   * true if the underlying handle is valid.
   * Do not call any other functions if this is false.
   */
  readonly is_valid: boolean;


  /**
   * @returns Returns the browser for this context. This function will return an null
	 * reference for WebWorker contexts.
   */
  get_browser(): Browser;

  /**
   * @returns Returns the frame for this context. This function will return an null
	 * reference for WebWorker contexts.
   */
  get_frame(): Frame;

  /**
   * @returns Returns the global object for this context.
   */
  get_global(): V8Value;

  /**
   * @returns Returns true if this object is pointing to the same handle as |that| object.
   */
  is_same(
    that: V8Context
  ): boolean;

  /**
   * 
   * Execute a string of JavaScript code in this V8 context.
   * On success |ret_val| will be set to the return value, if any, and |result| will be set to true.
   * On failure |exception| will be set to the exception, if any, and |result| will be set to false.
   * @param  script_url The URL where the script in question can be found, if any.
   * @param start_line The base line number to use for error reporting.
   */
  eval(
    code: string,
    script_url: string,
    start_line: number
  ): V8ContextEvalResult;

  /**
   * Create a new [[V8Value]] object of type undefined.
   */
  create_undefined(): V8Value;

  /**
   * Create a new [[V8Value]] object of type null.
   */
  create_null(): V8Value;

  /**
   * Create a new [[V8Value]] object of type bool.
   */
  create_bool(
    value: boolean
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type int.
   */
  create_int(
    value: number
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type unsigned int.
   */
  create_uint(
    value: number
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type double.
   */
  create_double(
    value: number
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type Date.
   */
  create_date(
    date: CefTime
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type string.
   */
  create_string(
    value: string
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type object.
   */
  create_object(): V8Value;

  /**
   * Create a new [[V8Value]] object of type array with the specified |length|.
	 * If |length| is negative the returned array will have length 0.
   */
  create_array(
    length: number
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type function.
   */
  create_function(
    name: string,
    handler: V8Handler
  ): V8Value;
}