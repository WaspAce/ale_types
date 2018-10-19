/**
 * Structure representing a V8 context handle.
 */
declare class V8Context {
  /**
   * true if the underlying handle is valid and it can be accessed
   * on the current thread. Do not call any other functions if this is false.
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
   * The context must be entered before calling this function.
   */
  get_global(): V8Value;

  /**
   * Enter this context. A context must be explicitly entered before creating a
	 * V8 Object, Array, Function or Date asynchronously. exit() must be called
	 * the same number of times as enter() before releasing this context. V8
	 * objects belong to the context in which they are created.
   * @returns Returns true if the scope was entered successfully.
   */
  enter(): boolean;

  /**
   * Exit this context. Call this function only after calling enter().
   * @returns Returns true if the scope was exited successfully.
   */
  exit(): boolean;

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
  ): {
    result: boolean
    ret_val: V8Value,
    exception: V8Exception
  }
}