declare class V8 {
  /**
   * @returns Returns the current (top) context object in the V8 context stack.
   */
  static get_current_context(): V8Context;

  /**
   * @returns Returns the entered (bottom) context object in the V8 context stack.
   */
  static get_entered_context(): V8Context;

  /**
   * @returns Returns true if V8 is currently inside a context.
   */
  static in_context(): boolean;

  /**
   * Create a new [[V8Value]] object of type undefined.
   */
  static create_undefined(): V8Value;

  /**
   * Create a new [[V8Value]] object of type null.
   */
  static create_null(): V8Value;

  /**
   * Create a new [[V8Value]] object of type bool.
   */
  static create_bool(
    value: boolean
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type int.
   */
  static create_int(
    value: number
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type unsigned int.
   */
  static create_uint(
    value: number
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type double.
   */
  static create_double(
    value: number
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type Date.
   * This function should only be called from within the scope of a [[RenderProcessHandler]],
	 * [[V8Handler]] or in combination with calling enter() and exit() on a stored [[V8Context]] reference.
   */
  static create_date(
    date: CefTime
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type string.
   */
  static create_string(
    value: string
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type object.
   * This function should only be called from within the scope of a [[RenderProcessHandler]],
	 * [[V8Handler]] or in combination with calling enter() and exit() on a stored [[V8Context]] reference.
   */
  static create_object(): V8Value;

  /**
   * Create a new [[V8Value]] object of type array with the specified |length|.
	 * If |length| is negative the returned array will have length 0.
   * This function should only be called from within the scope of a [[RenderProcessHandler]],
	 * [[V8Handler]] or in combination with calling enter() and exit() on a stored [[V8Context]] reference.
   */
  static create_array(
    length: number
  ): V8Value;

  /**
   * Create a new [[V8Value]] object of type function.
   * This function should only be called from within the scope of a [[RenderProcessHandler]],
	 * [[V8Handler]] or in combination with calling enter() and exit() on a stored [[V8Context]] reference.
   */
  static create_function(
    name: string,
    handler: V8Handler
  ): V8Value;
}