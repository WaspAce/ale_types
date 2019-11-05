/**
 * Class representing a V8 value handle.
 */
 declare class V8Value {
  /**
   * true if the underlying handle is valid and it can be accessed
	 * on the current thread. Do not call any other functions if this function
	 * returns false.
   */
  is_valid: boolean;

  /**
   * True if the value type is undefined.
   */
  is_undefined: boolean;

  /**
   * True if the value type is null.
   */
  is_null: boolean;

  /**
   * True if the value type is bool.
   */
  is_bool: boolean;

  /**
   * True if the value type is int.
   */
  is_int: boolean;

  /**
   * True if the value type is unsigned int.
   */
  is_uint: boolean;

  /**
   * True if the value type is double.
   */
  is_double: boolean;

  /**
   * True if the value type is Date.
   */
  is_date: boolean;

  /**
   * True if the value type is string.
   */
  is_string: boolean;

  /**
   * True if the value type is object.
   */
  is_object: boolean;

  /**
   * True if the value type is array.
   */
  is_array: boolean;

  /**
   * True if the value type is an ArrayBuffer.
   */
  is_array_buffer: boolean;

  /**
   * True if the value type is function.
   */
  is_function: boolean;


  /**
   * 
   * @returns [[V8Context]] for this value.
   */
  get_context(): V8Context;

  /**
   * @returns Returns true if this object is pointing to the same handle as |that|
	 * object.
   */
  is_same(
    that: V8Value
  ): boolean;

  /**
   * @return Return a bool value.
   */
  get_bool_value(): boolean;

  /**
   * @return Return an int value.
   */
  get_int_value(): number;

  /**
   * @return Return an unsigned int value.
   */
  get_uint_value(): number;

  /**
   * @return Return a double value.
   */
  get_double_value(): number;

  /**
   * @return Return a Date value.
   */
  get_date_value(): CefTime;

  /**
   * @return Return a string value.
   */
  get_string_value(): string;

  // OBJECT METHODS - These functions are only available on objects. Arrays and
  // functions are also objects. String- and integer-based keys can be used
  // interchangably with the framework converting between them as necessary.

  /**
   * @return Returns true if this is a user created object.
   */
  is_user_created(): boolean;

  /**
   * @return Returns true if the last function call resulted in an exception. This
	 * attribute exists only in the scope of the current CEF value object.
   */
  has_exception(): boolean;

  /**
   * @returns Returns the exception resulting from the last function call. This attribute
	 * exists only in the scope of the current CEF value object.
   */
  get_exception(): V8Exception;

  /**
   * Clears the last exception and returns true on success.
   */
  clear_exception(): boolean;

  /**
   * @returns Returns true if this object will re-throw future exceptions. This
	 * attribute exists only in the scope of the current CEF value object.
   */
  will_rethrow_exceptions(): boolean;

  /**
   * Set whether this object will re-throw future exceptions. By default
	 * exceptions are not re-thrown. If a exception is re-thrown the current
	 * context should not be accessed again until after the exception has been
	 * caught and not re-thrown.
   * This attribute exists only in the scope of the current CEF value object.
   * @returns Returns true on success.
   */
  set_rethrow_exceptions(
    rethrow: boolean): boolean;

  /**
   * @returns Returns true if the object has a value with the specified identifier.
   */
  has_value_by_key(
    key: string): boolean;

  /**
   * @returns Returns true if the object has a value with the specified identifier.
   */
  has_value_by_index(
    index: number): boolean;

  /**
   * Deletes the value with the specified identifier and returns true on
	 * success. Returns false if this function is called incorrectly or an
	 * exception is thrown. For read-only and don't-delete values this function
	 * will return true even though deletion failed.
   */
  delete_value_by_key(
    key: string): boolean;

  /**
   * Deletes the value with the specified identifier and returns true on
	 * success. Returns false if this function is called incorrectly, deletion
	 * fails or an exception is thrown. For read-only and don't-delete values this
	 * function will return true even though deletion failed.
   */
  delete_value_by_index(
    index_: number): boolean;

  /**
   * @returns Returns the value with the specified identifier on success. Returns null if
	 * this function is called incorrectly or an exception is thrown.
   */
  get_value_by_key(
    key: string): V8Value;

  /**
   * @returns Returns the value with the specified identifier on success. Returns null if
	 * this function is called incorrectly or an exception is thrown.
   */
  get_value_by_index(
    index: number): V8Value;

  /**
   * Associates a value with the specified identifier and returns true on success.
   * Returns false if this function is called incorrectly or an
	 * exception is thrown. For read-only values this function will return true
	 * even though assignment failed.
   */
  set_value_by_key(
    key: string,
    value: V8Value,
    attribute?: V8PropertyAttribute[]): boolean;

  /**
   * Associates a value with the specified identifier and returns true on
	 * success. Returns false if this function is called incorrectly or an
	 * exception is thrown. For read-only values this function will return true
	 * even though assignment failed.
   */
  set_value_by_index(
    index: number,
    value: V8Value): boolean;

  /**
   * Registers an identifier and returns true on success. Access to the
	 * identifier will be forwarded to the [[V8Accessor]] instance passed to
	 * [[subprocess]].v8_value_create_object(). Returns false if this
	 * function is called incorrectly or an exception is thrown. For read-only
	 * values this function will return true even though assignment failed.
   */
  set_value_by_accessor(
    key: string,
    settings?: V8AccessControl[],
    attribute?: V8PropertyAttribute[]): boolean;

  /**
   * Read the keys for the object's values into the specified [[StringList]]. Integer-
	 * based keys will also be returned as strings.
   */
  get_keys(
    keys: StringList): boolean;

  /**
   * Returns the amount of externally allocated memory registered for the
	 * object.
   */
  get_externally_allocated_memory(): number;

  /**
   * Adjusts the amount of registered external memory for the object. Used to
	 * give V8 an indication of the amount of externally allocated memory that is
	 * kept alive by JavaScript objects. V8 uses this information to decide when
	 * to perform global garbage collection. Each [[V8Value]] tracks the amount
	 * of external memory associated with it and automatically decreases the
	 * global total by the appropriate amount on its destruction.
	 * @param change_in_bytes Specifies the number of bytes to adjust by.
   * @returns The number of bytes associated with the object after the
	 * adjustment. This function can only be called on user created objects.
   */
  adjust_externally_allocated_memory(
    change_in_bytes: number): number;


  // ARRAY METHODS - These functions are only available on arrays.

  /**
   * Returns the number of elements in the array.
   */
  get_array_length(): number;

  // ARRAY BUFFER METHODS - These functions are only available on ArrayBuffers.

  /**
   * Returns the ReleaseCallback object associated with the ArrayBuffer or null
	 * if the ArrayBuffer was not created with CreateArrayBuffer.
   */
  get_array_buffer_release_callback(): V8ArrayBufferReleaseCallback;

  /**
   * Prevent the ArrayBuffer from using it's memory block by setting the length
	 * to zero. This operation cannot be undone. If the ArrayBuffer was created
	 * with CreateArrayBuffer then
	 * [[V8ArrayBufferReleaseCallback]].release_buffer will be called to
	 * release the underlying buffer.
   */
  neuter_array_buffer(): boolean;

  // FUNCTION METHODS - These functions are only available on functions.

  /**
   * Returns the function name.
   */
  get_function_name(): string;

  /**
   * Returns the function handler or null if not a CEF-created function.
   */
  get_function_handler(): V8Handler;

  /**
   * Execute the function using the current V8 context. This function should
	 * only be called from within the scope of a cef_v8handler_t or
	 * [[V8Accessor]] callback, or in combination with calling enter() and
	 * exit() on a stored [[V8Context]] reference.
   * @param object The receiver ('this' object) of the function.
   * If |object| is null the current context's global object will be used.
   * @param arguments The list of arguments that will be passed to the function.
   * @returns Returns the function return value on success. Returns null if this
   * function is called incorrectly or an exception is thrown.
   */
  execute_function(
    object_: V8Value,
    arguments?: V8Value[]): V8Value;

  /**
   * Execute the function using the specified V8 context.
   * @param object The receiver ('this' object) of the function.
   * If |object| is null the specified context's global object will be used.
   * @param arguments The list of arguments that will be passed to the function.
   * @returns Returns the function return value on success. Returns null if this
   * function is called incorrectly or an exception is thrown.
   */
  execute_function_with_context(
    context: V8Context,
    object_: V8Value,
    arguments?: V8Value[]): V8Value;
 }