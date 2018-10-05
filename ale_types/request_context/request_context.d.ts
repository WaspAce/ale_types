declare class RequestContext {
    /**
     * Creates a new context object with optional handler.
     */
    constructor(
        handler?: RequestContextHandler
    );

    /**
     * true if this object is the global context. The global context
     * is used by default when creating a browser or URL request with a NULL
     * context argument.
     */
    readonly is_global: boolean;


    /**
     * @returns true if this object is pointing to the same context as |that|
     * object.
     */
    is_same(
        other: RequestContext
    ): boolean;

    /**
     * @returns true if this object is sharing the same storage as |that|
     * object.
     */
    is_sharing_with(
        other: RequestContext
    ): boolean;

    /**
     * @returns the handler for this context if any.
     */
    get_handler(): RequestContextHandler | null;

    /**
     * @returns the default cookie manager for this object. This will be the global
     * cookie manager if this object is the global request context. Otherwise,
     * this will be the default cookie manager used when this request context does
     * not receive a value via [[RequestContextHandler]].get_cookie_manager().
     */
    get_default_cookie_manager(): CookieManager;

    /**
     * Register a scheme handler factory for the specified |scheme_name| and
     * optional |domain_name|. An NULL |domain_name| value for a standard scheme
     * will cause the factory to match all domain names. The |domain_name| value
     * will be ignored for non-standard schemes. If |scheme_name| is a built-in
     * scheme and no handler is returned by |factory| then the built-in scheme
     * handler factory will be called. If |scheme_name| is a custom scheme then
     * you must also implement the cef_app_t::on_register_custom_schemes()
     * function in all processes. This function may be called multiple times to
     * change or remove the factory that matches the specified |scheme_name| and
     * optional |domain_name|. Returns false (0) if an error occurs. This function
     * may be called on any thread in the browser process.
     * 
     * TODO
     */
    register_scheme_handler_factory(
        scheme_name: string,
        domain_name: string,
        factory: any
    ): boolean;

    /**
     * Clear all registered scheme handler factories.
     * @returns false on error.
     */
    clear_scheme_handler_factories(): boolean;

    /**
     * Tells all renderer processes associated with this context to throw away
     * their plugin list cache. If |reload_pages| is true (1) they will also
     * reload all pages with plugins.
     * [[RequestContextHandler]].on_before_plugin_load may be called to rebuild
     * the plugin list cache.
     */
    purge_plugin_list_cache(
        reload_pages: boolean
    ): void;

    /**
     * 
     * @returns true if a preference with the specified |name| exists.
     */
    has_preference(
        name: string
    ): boolean;

    /**
     * @returns the value for the preference with the specified |name|.
     * @returns null if the preference does not exist. The returned object contains a copy
     * of the underlying preference value and modifications to the returned object
     * will not modify the underlying preference value.
     */
    get_preference(
        name: string
    ): Value | null;

    /**
     * @returns all preferences as a dictionary. If |include_defaults| is true
     * then preferences currently at their default value will be included. The
     * returned object contains a copy of the underlying preference values and
     * modifications to the returned object will not modify the underlying
     * preference values.
     */
    get_all_preferences(
        include_defaults: boolean
    ): DictionaryValue;

    /**
     * @returns true if the preference with the specified |name| can be
     * modified using set_reference.
     */
    can_set_preference(
        name: string
    ): boolean;

    /**
     * Set the |value| associated with preference |name|.
     * @returns A detailed description of the problem if setting the preference fails.
     */
    set_preference(
        name: string,
        value: Value
    ): string;

    /**
     * Clears all active and idle connections that Chromium currently has. This is
     * only recommended if you have released all other CEF objects.
     * If |callback| is non-NULL it will be executed asynchronously.
     */
    close_all_connections(
        callback: Callback
    ): void;

    /**
     * Attempts to resolve |origin| to a list of associated IP addresses.
     * |callback| will be executed asynchronously after completion.
     */
    resolve_host(
        origin: string,
        callback: ResolveCallback
    ): void;

    /**
     * Attempts to resolve |origin| to a list of associated IP addresses using
     * cached data.
     * @param resolved_ips Will be populated with the list of resolved IP
     * addresses.
     * @returns ERR_NONE on success.
     */
    resolve_host_cached(
        origin: string,
        resolved_ips: StringList
    ): CefErrorCode;

    /**
     * Load an extension.
     *
     * If extension resources will be read from disk using the default load
     * implementation then |root_directory| should be the absolute path to the
     * extension resources directory and |manifest| should be null. If extension
     * resources will be provided by the client (e.g. via cef_request_tHandler
     * and/or cef_extension_tHandler) then |root_directory| should be a path
     * component unique to the extension (if not absolute this will be internally
     * prefixed with the PK_DIR_RESOURCES path) and |manifest| should contain the
     * contents that would otherwise be read from the "manifest.json" file on
     * disk.
     *
     * The loaded extension will be accessible in all contexts sharing the same
     * storage (has_extension returns true). However, only the context on which
     * this function was called is considered the loader (did_load_extension returns
     * true) and only the loader will receive [[RequestContextHandler]]
     * callbacks for the extension.
     *
     * [[ExtensionHandler]].on_extension_loaded will be called on load success or
     * [[ExtensionHandler]].on_extension_load_failed will be called on load
     * failure.
     *
     * If the extension specifies a background script via the "background"
     * manifest key then [[ExtensionHandler]].on_before_background_browser will be
     * called to create the background browser. See that function for additional
     * information about background scripts.
     *
     * For visible extension views the client application should evaluate the
     * manifest to determine the correct extension URL to load and then pass that
     * URL to the [[BrowserHost]].create_browser function after the extension
     * has loaded. For example, the client can look for the "browser_action"
     * manifest key as documented at
     * https://developer.chrome.com/extensions/browserAction. Extension URLs take
     * the form "chrome-extension://<extension_id>/<path>".
     *
     * Browsers that host extensions differ from normal browsers as follows:
     *  - Can access chrome.* JavaScript APIs if allowed by the manifest. Visit
     *    chrome://extensions-support for the list of extension APIs currently
     *    supported by CEF.
     *  - Main frame navigation to non-extension content is blocked.
     *  - Pinch-zooming is disabled.
     *  - [[BrowserHost]].get_extension returns the hosted extension.
     *  - [[BrowserHost]].is_background_host returns true for background hosts.
     *
     * See https://developer.chrome.com/extensions for extension implementation
     * and usage documentation.
     */
    load_extension(
        root_directory: string,
        manifest: DictionaryValue,
        handler: ExtensionHandler
    ): void;

    /**
     * @returns true if this context was used to load the extension identified
     * by |extension_id|. Other contexts sharing the same storage will also have
     * access to the extension (see has_extension).
     */
    did_load_extension(
        extension_id: string
    ): boolean;

    /**
     * @returns true if this context has access to the extension identified by
     * |extension_id|. This may not be the context that was used to load the
     * extension (see DidLoadExtension).
     */
    has_extension(
        extension_id: string
    ): boolean;

    /**
     * Rretrieve the list of all extensions that this context has access to (see
     * has_extension). |extension_ids| will be populated with the list of extension
     * ID values.
     * @returns true on success.
     */
    get_extensions(
        extension_ids: StringList
    ): boolean;

    /**
     * @Returns the extension matching |extension_id| or null if no matching
     * extension is accessible in this context (see has_extension).
     */
    get_extension(
        extension_id: string
    ): Extension | null;
}
