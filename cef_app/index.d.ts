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
   * 
   */
  static init();

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
   * Called after the CEF context has been initialized.
   * @event
   */
  static on_context_initialized: () => void;
}