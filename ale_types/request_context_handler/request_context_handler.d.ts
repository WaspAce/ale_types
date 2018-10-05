/**
 * The handler instance will not be released until all objects related to the context have
 * been destroyed.
 */
declare class RequestContextHandler {
    /**
     * @param cookie_manager If null the default cookie manager retrievable via
     * [[RequestContext]].get_default_cookie_manager() will be used.
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
        cookie_manager: CookieManager | null,
        delegate?: object
    )

    /**
     * Called immediately after the request context has been initialized.
     * @event
     */
    on_request_context_initialized: (
        request_context: RequestContext
    ) => void;

    /**
     * Called before a plugin instance is loaded.
     * @event
     */
    on_before_plugin_load:
    /**
     * @param mime_type The mime type of the plugin that will be loaded.
     * @param plugin_url The content URL that the plugin will load and may be empty.
     * @param is_main_frame Will be true if the plugin is being loaded in the main
     * (top-level) frame.
     * @param top_origin_url The URL for the top-level frame that
     * contains the plugin when loading a specific plugin instance or empty when
     * building the initial list of enabled plugins for 'navigator.plugins'
     * JavaScript state.
     * @param plugin_info Includes additional information about the
     * plugin that will be loaded.
     * @param plugin_policy The recommended policy.
     * Decisions to mark a plugin as disabled by setting
     * |plugin_policy| to PLUGIN_POLICY_DISABLED may be cached when
     * |top_origin_url| is empty. To purge the plugin list cache and potentially
     * trigger new calls to this function call
     * [[RequestContext]].purge_plugin_list_cache.
     * @return PluginPolicy that will be set or null to use recommended one.
     */
    (
        mime_type: string,
        plugin_url: string,
        is_main_frame: boolean,
        top_origin_url: string,
        plugin_info: string,
        plugin_policy: PluginPolicy
    ) => PluginPolicy | null;
}
