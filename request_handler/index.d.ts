declare interface RequestHandlerOnGetResourceRequestHandlerResult {
  disable_default_handling: boolean;
  handler: ResourceRequestHandler;
}

declare interface RequestHandlerOnGetAuthCredentialsResult {
  username: string;
  password: string;
}

/**
* @return Return true to cancel the navigation or false to allow the navigation to proceed.
* @param request Cannot be modified in this callback.
* @param user_gesture Value will be true if the browser navigated via explicit
* user gesture (e.g. clicking a link) or false if
* it navigated automatically (e.g. via the DomContentLoaded event).
*/
declare type RequestHandlerOnBeforeBrowse = 
(
  browser: Browser,
  frame: Frame,
  request: Request,
  user_gesture: boolean,
  is_redirect: boolean
) => boolean;

/**
* The |browser| and |frame| values represent the source of the navigation.
* @param target_disposition Value indicates where the user intended to navigate
* the browser based on standard Chromium behaviors (e.g. current tab, new
* tab, etc).
* @param user_gesture Value will be true if the browser
* navigated via explicit user gesture (e.g. clicking a link) or false if
* it navigated automatically (e.g. via the DomContentLoaded event).
* @return Return true to cancel the navigation or false to allow the navigation to
* proceed in the source browser's top-level frame.
*/
declare type RequestHandlerOnOpenUrlFromTab = (
  browser: Browser,
  frame: Frame,
  target_url: string,
  target_disposition: WindowOpenDisposition,
  user_gesture: boolean
) => boolean;

/**
* The |browser| and |frame| values represent the source of the
* request. |request| represents the request contents and cannot be modified
* in this callback. |is_navigation| will be true (1) if the resource request
* is a navigation. |is_download| will be true (1) if the resource request is
* a download. |request_initiator| is the origin (scheme + domain) of the page
* that initiated the request. Set |disable_default_handling| to true (1) to
* disable default handling of the request, in which case it will need to be
* handled via [[ResourceRequestHandler]].on_get_resource_handler or it will
* be canceled. To allow the resource load to proceed with default handling
* return handler as NULL. To specify a handler for the resource return handler as a
* [[ResourceRequestHandler]] object. If this callback returns NULL the
* same function will be called on the associated cef_request_tContextHandler,
* if any.
*/
declare type RequestHandlerOnGetResourcerequestHandler = (
  browser: Browser,
  frame: Frame,
  request: Request,
  is_navigation: boolean,
  is_download: boolean,
  request_initiator: string
) => RequestHandlerOnGetResourceRequestHandlerResult;

/**
* |origin_url| is the origin making this authentication request. |is_proxy|
* indicates whether the host is a proxy server. |host| contains the hostname
* and |port| contains the port number. |realm| is the realm of the challenge
* and may be NULL. |scheme| is the authentication scheme used, such as
* "basic" or "digest", and will be NULL if the source of the request is an
* FTP server.
*/
declare type RequestHandlerOnGetAuthCredentials = (
  browser: Browser,
  origin_url: string,
  is_proxy: boolean,
  host: string,
  port: string,
  realm: string,
  scheme: string
) => RequestHandlerOnGetAuthCredentialsResult;

/**
* @param origin_url The origin of the page making the request.
* @param new_size The requested quota size in bytes.
* @return Return true to continue the request and call
* [[RequestCallback]].cont() either in this function or at a later time to
* grant or deny the request. Return false to cancel the request.
*/
declare type RequestHandlerOnQuotaRequest = (
  browser: Browser,
  origin_url: string,
  new_size: number,
  callback: Callback
) => boolean;

/**
* @param plugin_path The path of the plugin that crashed.
*/
declare type RequestHandlerOnPluginCrashed = 
(
  browser: Browser,
  plugin_path: string
) => void;

declare type RequestHandlerOnRenderViewReady = (
  browser: Browser
) => void;

/**
* @param status Indicates how the process terminated.
*/
declare type RequestHandlerOnRenderProcessTerminated = (
  browser: Browser,
  status: TerminationStatus
) => void;

/**
 * 
 */
declare class RequestHandler {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
      delegate?: object
    );

    /**
     * Called before browser navigation.
     * [[LoadHandler]].on_loading_state_change will be called twice in all cases.
     * If the navigation is allowed [[LoadHandler]].on_load_start and
     * [[LoadHandler]].on_load_end will be called. If the navigation is canceled
     * [[LoadHandler]].on_load_error will be called with an |errorCode| value of
     * ERR_ABORTED. 
     * @event
     */
    on_before_browse: RequestHandlerOnBeforeBrowse;

    /**
     * Called before on_before_browse in certain limited cases
     * where navigating a new or different browser might be desirable. This
     * includes user-initiated navigation that might open in a special way (e.g.
     * links clicked via middle-click or ctrl + left-click) and certain types of
     * cross-origin navigation initiated from the renderer process (e.g.
     * navigating the top-level frame to/from a file URL).
     * @event
     */
    on_open_url_from_tab: RequestHandlerOnOpenUrlFromTab;

    /**
     * Called before a resource request is initiated.
     */
    on_get_resource_request_handler: RequestHandlerOnGetResourcerequestHandler;

    /**
     * Called when the browser needs credentials from the user.
     * @event
		 */
    on_get_auth_credentials: RequestHandlerOnGetAuthCredentials;

    /**
     * Called when JavaScript requests a specific storage quota
     * size via the webkitStorageInfo.requestQuota function.
     * immediately.
     * @event
     */
    on_quota_request: RequestHandlerOnQuotaRequest;
    
    /**
     * Called when a plugin has crashed.
     * @event
     */
    on_plugin_crashed: RequestHandlerOnPluginCrashed;

    /**
     * Called when the render view associated with |browser| is ready to receive/handle IPC
     * messages in the render process.
     * @event
     */
    on_render_view_ready: RequestHandlerOnRenderViewReady;

    /**
     * Called when the render process terminates unexpectedly.
     * @event
     */
    on_render_process_terminated: RequestHandlerOnRenderProcessTerminated;
}
