/**
 * The handler instance will not be released until all objects related to the context have
 * been destroyed.
 */
declare class ResourceRequestHandler {
  /**
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
      delegate?: object
  )

  /**
   * Called before a resource request is loaded.
   * @event
   */
  on_get_cookie_access_filter:
  /**
   * The |browser| and |frame| values represent the source of the request,
   * and may be NULL for requests originating from service workers or [[UrlRequest]]. To
   * optionally filter cookies for the request return a [[CookieAccessFilter]] object.
   * The |request| object cannot not be modified in this callback.
   */
  (
    browser: Browser,
    frame: Frame,
    request: Request
  ) => CookieAccessFilter;


  /**
   * Called before a resource request is loaded.
   * @event
   */
  on_before_resource_load:
  /**
   * The |browser| and |frame| values represent the source of the request,
   * and may be NULL for requests originating from service workers or [[UrlRequest]].
   * To redirect or change the resource load optionally modify |request|. Modification of
   * the request URL will be treated as a redirect.
   * Return true to continue the request or false to cancel the request.
   */
  (
    browser: Browser,
    frame: Frame,
    request: Request
  ) => boolean;

  /**
   * Called before a resource is loaded.
   * @event
   */
  on_get_resource_handler:
  /**
   * The |browser| and |frame| values represent the source of the request, and may be NULL for
   * requests originating from service workers or [[UrlRequest]]. To allow the
   * resource to load using the default network loader return NULL. To specify a
   * handler for the resource return a [[ResourceHandler]] object. The
   * |request| object cannot not be modified in this callback.
   */
  (
    browser: Browser,
    frame: Frame,
    request: Request
  ) => ResourceHandler;

  /**
   * Called when a resource load is redirected.
   * @event
   */
  on_resource_redirect:
  /**
   * The |browser| and |frame| values represent the source of the request, and may be NULL for
   * requests originating from service workers or [[UrlRequest]]. The
   * |request| parameter will contain the old URL and other request-related
   * information. The |response| parameter will contain the response that
   * resulted in the redirect. The |new_url| parameter will contain the new URL
   * and can be changed if desired. The |request| and |response| objects cannot
   * be modified in this callback.
   */
  (
    browser: Browser,
    frame: Frame,
    request: Request,
    response: Response,
    new_url: string
  ) => void;

  /**
   * Called when a resource response is received.
   * @event
   */
  on_resource_response:
  /**
   * The |browser| and |frame| values represent the source of the request, and may be NULL for
   * requests originating from service workers or [[UrlRequest]]. To allow the
   * resource load to proceed without modification return false (0). To redirect
   * or retry the resource load optionally modify |request| and return true (1).
   * Modification of the request URL will be treated as a redirect. Requests
   * handled using the default network loader cannot be redirected in this
   * callback. The |response| object cannot be modified in this callback.
   *
   * WARNING: Redirecting using this function is deprecated. Use
   * on_before_resource_load or get_resource_handler to perform redirects.
   */
  (
    browser: Browser,
    frame: Frame,
    request: Request,
    response: Response
  ) => boolean;

  /**
   * Called to optionally filter resource response content.
   * @event
   */
  on_get_resource_response_filter:
  /**
   * The |browser| and |frame| values represent the source of the request, and may
   * be NULL for requests originating from service workers or [[UrlRequest]].
   * |request| and |response| represent the request and response respectively
   * and cannot be modified in this callback.
   */
  (
    browser: Browser,
    frame: Frame,
    request: Request,
    response: Response
  ) => ResponseFilter;

  /**
   * Called when a resource load has completed.
   * @event
   */
  on_resource_load_complete:
  /**
   * The |browser| and |frame| values represent the source of the request, and may be NULL for
   * requests originating from service workers or [[UrlRequest]]. |request|
   * and |response| represent the request and response respectively and cannot
   * be modified in this callback. |status| indicates the load completion
   * status. |received_content_length| is the number of response bytes actually
   * read. This function will be called for all requests, including requests
   * that are aborted due to CEF shutdown or destruction of the associated
   * browser. In cases where the associated browser is destroyed this callback
   * may arrive after the cef_life_span_handler_t::OnBeforeClose callback for
   * that browser. The [Frame].is_valid() function can be used to test for
   * this situation, and care should be taken not to call |browser| or |frame|
   * functions that modify state (like load_url, send_process_message, etc.) if the
   * frame is invalid.
   */
  (
    browser: Browser,
    frame: Frame,
    request: Request,
    response: Response,
    status: UrlRequestStatus,
    received_content_length: number
  ) => void;
}
