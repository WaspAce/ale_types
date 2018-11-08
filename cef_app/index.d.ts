declare class CEF_APP {

  /**
   * 
   */
  static readonly settings: CefAppSettings;

  /**
   * 
   */
  static loop_interval_ms: number;

  /**
   * 
   */
  static external_message_pump: boolean;

  /**
   * 
   */
  static readonly initialized: boolean;

  /**
   * 
   */
  static subprocess_source: string;

  /**
   * Provides an opportunity to specify extra information that will be passed to
   * [[RenderProcessHandler]].on_render_thread_created() in the render process.
   */
  static subprocess_info: ListValue;


  /**
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  static init(
    delegate?: object
  );

  /**
   * 
   */
  static get_global_request_context(): RequestContext;

  /**
   * 
   */
  static get_global_cookie_manager(): CookieManager;

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

  /**
   * Register a custom scheme. This function should not be called for the built-
	 * in HTTP, HTTPS, FILE, FTP, ABOUT and DATA schemes.
	 *
	 * This function should only be called once per unique scheme.scheme_name value.
   * 
   * MUST be called before [[CEF_APP]].init() called.
   */
  static add_custom_scheme(
    scheme: CustomScheme
  ): void;


  /**
   * Called after the CEF context has been initialized.
   * @event
   */
  static on_context_initialized: () => void;
}