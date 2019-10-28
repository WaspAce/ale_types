declare type V8HandlerOnExecute = /**
* @param context Execution context.
* @param object The receiver ('this' object) of the function.
* @param arguments The list of arguments passed to the function.
*/
(
  context: V8Context,
  name: string,
  object: V8Value,
  arguments: V8Value[]
) => void;

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
  on_execute: V8HandlerOnExecute;
}