/**
 * The handler instance will not be released until all objects related to the context have
 * been destroyed.
 */
declare class CookieAccessFilter {
  /**
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
      delegate?: object
  )

  /**
   * Called before a resource request is sent.
   */
  can_send_cookie:
  /**
   * The |browser| and |frame| values represent the source of the request,
   * and may be NULL for requests originating from service workers or [[UrlRequest]].
   * |request| cannot be modified in this callback. Return true (1) if the specified
   * cookie can be sent with the request or false (0) otherwise.
   */
  (
    browser: Browser,
    frame: Frame,
    request: Request,
    cookie: Cookie
  ) => boolean;

  /**
   * Called after a resource response is received.
   */
  can_save_cookie:
  /**
   * The |browser| and |frame| values represent the source of the request, and may
   * be NULL for requests originating from service workers or [[UrlRequest]].
   * |request| cannot be modified in this callback. Return true (1) if the
   * specified cookie returned with the response can be saved or false (0)
   * otherwise.
   */
  (
    browser: Browser,
    frame: Frame,
    request: Request,
    response: Response,
    cookie: Cookie
  ) => boolean;
}
