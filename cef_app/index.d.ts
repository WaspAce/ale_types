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
   * Called after the CEF context has been initialized.
   * @event
   */
  static on_context_initialized: () => void;

  /**
   * Provides an opportunity to register custom schemes.
   * This function is called for each process and the
   * registered schemes should be the same across all processes.
   * @event
   */
  static on_register_custom_schemes:
  /**
   * @param registrar Do not keep a reference to the |registrar| object.
   */
  (
    registrar: SchemeRegistrar
  ) => void;
}