/**
 * Class to handle V8 function calls.
 */
declare class V8Handler {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Handle execution of the function identified by |name|.
   * @event
   */
  on_execute:
  /**
   * @param object The receiver ('this' object) of the function.
   * @param arguments The list of arguments passed to the function.
   * @param ret_val If execution succeeds set |ret_val| to the
	 * function return value.
   * @param exception If execution fails set |exception| to the exception
	 * that will be thrown.
   * @param result Set to true if execution was handled.
   */
  (
    name: string,
    object: V8Value,
    arguments: V8Value[]
  ) => {
    result: boolean,
    ret_val: V8Value,
    exception: string
  }
}