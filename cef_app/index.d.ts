declare class CEF_APP {

  /**
   * 
   */
  readonly settings: CefAppSettings;

  /**
   * 
   */
  loop_interval_ms: number;

  /**
   * 
   */
  external_message_pump: boolean;

  /**
   * 
   */
  readonly initialized: boolean;


  /**
   * 
   */
  static init(
    settings: CefAppSettings
  );

  /**
   * 
   */
  get_global_request_context(): RequestContext;

  /**
   * 
   */
  get_global_cookie_manager(): CookieManager;

  /**
   * Asynchronously create a new browser window using the window parameters specified by
   * |window_info|. All values will be copied internally.
   * @param request_context If is null the global request context will be used.
   */
  static create_browser(
    window_info: WindowInfo,
    client: BrowserClient,
    url: string,
    settings: BrowserSettings,
    request_context?: RequestContext
  );
}