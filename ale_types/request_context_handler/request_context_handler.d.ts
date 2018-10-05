declare class RequestContextHandler {
    constructor(
        cookie_manager: CookieManager,
        delegate?: object
    )

    on_request_context_initialized:(
        request_context: RequestContext
    ) => void;

    on_before_plugin_load:(
        mime_type: string,
        plugin_url: string,
        is_main_frame: boolean,
        top_origin_url: string,
        plugin_info: string,
        plugin_policy: PluginPolicy
    ) => PluginPolicy;
}
