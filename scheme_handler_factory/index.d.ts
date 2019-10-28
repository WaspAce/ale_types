/**
* |browser| and |frame| will be the browser window and frame respectively that
* originated the request or null if the request did not originate from a browser
* window (for example, if the request came from [[UrlRequest]]).
* The |request| object passed to this function will not contain cookie data.
* @return Return a new resource handler instance to handle the request or an null
* to allow default handling of the request.
*/
declare type SchemeHandlerFactoryOnCreate = (
  browser: Browser,
  frame: Frame,
  scheme_name: string,
  request: Request
) => ResourceHandler;

/**
 * Class that creates [[ResourceHandler]] instances for handling scheme
 * requests.
 */
declare class SchemeHandlerFactory {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );
  
  /**
   * Called to create [[ResourceHandler]] for handling scheme requests.
   * @event
   */
  on_create: SchemeHandlerFactoryOnCreate;
}