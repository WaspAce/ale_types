/**
 * Class used to register a V8 extension with the specified JavaScript extension code and
 * handler.
 */
declare class V8Extension {
  /**
   * 
   */
  name: string;

  /**
   * Functions implemented by the handler are prototyped using the
   * keyword 'native'. The calling of a native function is restricted to the scope
   * in which the prototype of the native function is defined.
   *
   * Example JavaScript extension code: 
   * ```javascript
   *   // create the 'example' global object if it doesn't already exist.
   *   if (!example)
   *     example = {};
   *   // create the 'example.test' global object if it doesn't already exist.
   *   if (!example.test)
   *     example.test = {};
   *   (function() {
   *     // Define the function 'example.test.myfunction'.
   *     example.test.myfunction = function() {
   *       // Call CefV8Handler::Execute() with the function name 'MyFunction'
   *       // and no arguments.
   *       native function MyFunction();
   *       return MyFunction();
   *     };
   *     // Define the getter function for parameter 'example.test.myparam'.
   *     example.test.__defineGetter__('myparam', function() {
   *       // Call CefV8Handler::Execute() with the function name 'GetMyParam'
   *       // and no arguments.
   *       native function GetMyParam();
   *       return GetMyParam();
   *     });
   *     // Define the setter function for parameter 'example.test.myparam'.
   *     example.test.__defineSetter__('myparam', function(b) {
   *       // Call CefV8Handler::Execute() with the function name 'SetMyParam'
   *       // and a single argument.
   *       native function SetMyParam();
   *       if(b) SetMyParam(b);
   *     });
   *
   *     // Extension definitions can also contain normal JavaScript variables
   *     // and functions.
   *     var myint = 0;
   *     example.test.increment = function() {
   *       myint += 1;
   *       return myint;
   *     };
   *   })();
   * ```
   *  Example usage in the page:
   * ```javascript
   *   // Call the function.
   *   example.test.myfunction();
   *   // Set the parameter.
   *   example.test.myparam = value;
   *   // Get the parameter.
   *   value = example.test.myparam;
   *   // Call another function.
   *   example.test.increment();
   * ```
   */
  code: string;

  /**
   * Handler for extension functions
   */
  handler: V8Handler;
}