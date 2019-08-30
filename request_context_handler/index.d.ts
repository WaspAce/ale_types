/**
 * The handler instance will not be released until all objects related to the context have
 * been destroyed.
 */
declare class RequestContextHandler {
    /**
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
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

    /**
     * Called before a resource request is initiated.
     */
    on_get_resource_request_handler:
    /**
     * The |browser| and |frame| values represent the source of the
     * request, and may be NULL for requests originating from service workers or
     * [[UrlRequest]]. |request| represents the request contents and cannot be
     * modified in this callback. |is_navigation| will be true (1) if the resource
     * request is a navigation. |is_download| will be true (1) if the resource
     * request is a download. |request_initiator| is the origin (scheme + domain)
     * of the page that initiated the request. Set |disable_default_handling| to
     * true (1) to disable default handling of the request, in which case it will
     * need to be handled via [[ResourceRequestHandler]].on_get_resource_handler
     * or it will be canceled. To allow the resource load to proceed with default
     * handling return handler as NULL. To specify a handler for the resource return
     * handler as a [[ResourceRequestHandler]] object. This function will not be called if
     * the client associated with |browser| returns a non-NULL value from
     * [[RequestHandler]].on_get_resource_request_handler for the same request
     * (identified by [[Request]].get_identifier).
     */
    (
      browser: Browser,
      frame: Frame,
      request: Request,
      is_navigation: boolean,
      is_download: boolean,
      request_initiator: string
    ) => {
      disable_default_handling: boolean
      handler: ResourceRequestHandler;
    };
}
