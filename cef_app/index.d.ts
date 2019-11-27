declare type CefAppOnContextInitialized = () => void;

declare class CefApp {

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
   * This function should be called shut down the CEF browser process before the application exits.
   */
  static shutdown();

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
    domain_name: string,
    factory: SchemeHandlerFactory
  ): boolean;

  static clear_scheme_handler_factories(): boolean;

  /**
   * Add an entry to the cross-origin access whitelist.
   * The same-origin policy restricts how scripts hosted from different origins
   * (scheme + domain + port) can communicate. By default, scripts can only access
   * resources with the same origin. Scripts hosted on the HTTP and HTTPS schemes
   * (but no other schemes) can use the "Access-Control-Allow-Origin" header to
   * allow cross-origin requests. For example, https://source.example.com can make
   * XMLHttpRequest requests on http://target.example.com if the
   * http://target.example.com request returns an "Access-Control-Allow-Origin:
   * https://source.example.com" response header.
   *
   * Scripts in separate frames or iframes and hosted from the same protocol and
   * domain suffix can execute cross-origin JavaScript if both pages set the
   * document.domain value to the same domain suffix. For example,
   * scheme://foo.example.com and scheme://bar.example.com can communicate using
   * JavaScript if both domains set document.domain="example.com".
   *
   * This function is used to allow access to origins that would otherwise violate
   * the same-origin policy. Scripts hosted underneath the fully qualified
   * |source_origin| URL (like http://www.example.com) will be allowed access to
   * all resources hosted on the specified |target_protocol| and |target_domain|.
   * If |target_domain| is non-NULL and |deny_target_subdomains| if true (0)
   * only exact domain matches will be allowed. If |target_domain| contains a top-
   * level domain component (like "example.com") and |deny_target_subdomains| is
   * false (1) sub-domain matches will be allowed. If |target_domain| is NULL and
   * |deny_target_subdomains| if false (1) all domains and IP addresses will be
   * allowed.
   *
   * This function cannot be used to bypass the restrictions on local or display
   * isolated schemes.
   *
   * @returns Returns false (0) if
   * |source_origin| is invalid or the whitelist cannot be accessed.
   */
  static add_cross_origin_whitelist_entry(
    source_origin: string,
    target_protocol: string,
    target_domain?: string,
    deny_target_subdomains?: boolean
  ): boolean;

  /**
   * Remove an entry from the cross-origin access whitelist.
   * @returns Returns false (0) if |source_origin| is invalid or the whitelist
   * cannot be accessed.
   */
  static add_cross_origin_whitelist_entry(
    source_origin: string,
    target_protocol: string,
    target_domain?: string,
    deny_target_subdomains?: boolean
  ): boolean;

  /**
   * Remove all entries from the cross-origin access whitelist.
   * @returns Returns false (0) if the whitelist cannot be accessed.
   */
  static clear_cross_origin_whitelist(): boolean;

  /**
   * Called after the CEF context has been initialized.
   * @event
   */
  static on_context_initialized: CefAppOnContextInitialized;
}