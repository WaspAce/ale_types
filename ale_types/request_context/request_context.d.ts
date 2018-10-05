declare class RequestContext {
    /**
     * Creates a new context object with optional handler.
     */
    constructor(
        handler?: RequestContextHandler
    );

    /**
     * true if this object is pointing to the same context as |that|
     * object.
     */
    readonly is_global: boolean;


    /**
     * 
     */
    is_same(
        other: RequestContext
    ): boolean;

    /**
     * 
     */
    is_sharing_with(
        other: RequestContext
    ): boolean;

    /**
     * 
     */
    get_handler(): RequestContextHandler;

    /**
     * 
     */
    get_default_cookie_manager(): CookieManager;

    /**
     * 
     */
    // TODO: add implementation SchemeHandlerFactory for factory parameter

    /**
     * 
     */
    register_scheme_handler_factory(
        scheme_name: string,
        domain_name: string,
        factory: any
    ): boolean;

    /**
     * 
     */
    clear_scheme_handler_factories(): boolean;

    /**
     * 
     */
    purge_plugin_list_cache(
        reload_pages: boolean
    ): void;

    /**
     * 
     */
    has_preference(
        name: string
    ): boolean;

    /**
     * 
     */
    get_preference(
        name: string
    ): Value;

    /**
     * 
     */
    get_all_preferences(
        include_defaults: boolean
    ): DictionaryValue;

    /**
     * 
     */
    can_set_preference(
        name: string
    ): boolean;

    /**
     * 
     */
    set_preference(
        name: string,
        value: Value
    ): string;

    /**
     * 
     */
    close_all_connections(
        callback: Callback
    ): void;

    /**
     * 
     */
    resolve_host(
        origin: string,
        callback: ResolveCallback
    ): void;

    /**
     * 
     */
    resolve_host_cached(
        origin: string,
        resolved_ips: StringList
    ): CefErrorCode;

    /**
     * 
     */
    load_extension(
        root_directory: string,
        manifest: DictionaryValue,
        handler: ExtensionHandler
    ): void;

    /**
     * 
     */
    did_load_extension(
        extension_id: string
    ): boolean;

    /**
     * 
     */
    has_extension(
        extension_id: string
    ): boolean;

    /**
     * 
     */
    get_extensions(
        extension_ids: StringList
    ): boolean;

    /**
     * 
     */
    get_extension(
        extension_id: string
    ): Extension;
}
