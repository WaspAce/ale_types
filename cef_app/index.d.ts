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
   * The registered schemes should be the same across all processes.
   * 
   * MUST be called before [[CEF_APP]].init() called.
   */
  static add_custom_scheme(
    scheme: CustomScheme
  ): void;

  /**
   * Register a scheme handler factory with the global request context. An empty
   * |domain_name| value for a standard scheme will cause the factory to match all
   * domain names. The |domain_name| value will be ignored for non-standard
   * schemes. If |scheme_name| is a built-in scheme and no handler is returned by
   * |factory| then the built-in scheme handler factory will be called. If
   * |scheme_name| is a custom scheme then you must also implement the
   * [[CEF_APP]].add_custom_scheme() function in main process and
   * [[subprocess]].add_custom_scheme() in subprocess. This function may be called
   * multiple times to change or remove the factory that matches the specified
   * |scheme_name| and optional |domain_name|.
   * Using this function is equivalent to calling
   * [[CEF_APP]].get_global_request_context().register_scheme_handler_factory().
   * @returns Returns false if an error occurs.
   */
  static register_scheme_handler_factory(
    scheme_name: string,
    somain_name: string,
    factory: SchemeHandlerFactory
  ): boolean;

  static clear_scheme_handler_factories(): boolean;


  /**
   * Called after the CEF context has been initialized.
   * @event
   */
  static on_context_initialized: () => void;
}