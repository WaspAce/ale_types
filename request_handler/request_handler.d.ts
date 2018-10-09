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
    on_before_browse:
    /**
     * @return Return true to cancel the navigation or false to allow the navigation to proceed.
     * @param request Cannot be modified in this callback.
     * @param user_gesture Value will be true if the browser navigated via explicit
     * user gesture (e.g. clicking a link) or false if
     * it navigated automatically (e.g. via the DomContentLoaded event).
     */
    (
        browser: Browser,
        frame: Frame,
        request: Request,
        user_gesture: boolean,
        is_redirect: boolean
    ) => boolean;

    /**
     * Called before on_before_browse in certain limited cases
     * where navigating a new or different browser might be desirable. This
     * includes user-initiated navigation that might open in a special way (e.g.
     * links clicked via middle-click or ctrl + left-click) and certain types of
     * cross-origin navigation initiated from the renderer process (e.g.
     * navigating the top-level frame to/from a file URL).
     * @event
     */
    on_open_url_from_tab:
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
    (
        browser: Browser,
        frame: Frame,
        target_url: string,
        target_disposition: WindowOpenDisposition,
        user_gesture: boolean
    ) => boolean;

    /**
     * Called before a resource request is loaded.
     * @event
     */
    on_before_resource_load:
    /**
     * @param request Object may be modified.
     * @returns Return true to continue the request or false to cancel the request.
     */
    (
        browser: Browser,
        frame: Frame,
        request: Request
    ) => boolean;

    /**
     * Called before a resource is loaded.
     * @event
     */
    on_get_resource_handler:
    /**
     * @return To allow the resource to load normally return null. To specify a handler for the resource return
     * a [[ResourceHandler]] object.
     * @param request Object should not be modified in this callback.
     */
    (
        browser: Browser,
        frame: Frame,
        request: Request
    ) => ResourceHandler | null;

    /**
     * Called when a resource load is redirected.
     * @event
     */
    on_resource_redirect:
    /**
     * @param request Parameter will contain the old URL and other request-related information.
     * @param response Parameter will contain the response that resulted in the
     * redirect.
     * @return Return the new URL if desired.
     * @param request Object cannot be modified in this callback.
     */
    (
        browser: Browser,
        frame: Frame,
        request: Request,
        response: Response
    ) => string;

    /**
     * Called when a resource response is received.
     * @event
     */
    on_resource_response:
    /**
     * @return To allow the resource to load normally return false. To redirect or retry the
     * resource modify |request| (url, headers or post body) and return true.
     * @param response Object cannot be modified in this callback.
     */
    (
        browser: Browser,
        frame: Frame,
        request: Request,
        response: Response
    ) => boolean;

    /**
     * Called to optionally filter resource response content.
     * @event
     */
    on_get_resource_response_filter: 
    /**
     * |request| and |response| represent the request and response respectively
     * and cannot be modified in this callback.
     */
    (
        browser: Browser,
        frame: Frame,
        request: Request,
        response: Response
    ) => ResponseFilter;

    /**
     * Called when a resource load has completed.
     * @event
     */
    on_resource_load_complete:
    /**
     * |request| and |response| represent the request and response respectively and cannot be
     * modified in this callback.
     * @param status Indicates the load completion status.
     * @return Number of response bytes actually read.
     */
    (
        browser: Browser,
        frame: Frame,
        request: Request,
        response: Response,
        status: UrlRequestStatus,
        received_content_length: number
    ) => number;

    /**
     * Called when the browser needs credentials from the user.
     * @event
     */
    on_get_auth_credentials:
    /**
     * @param is_proxy Indicates whether the host is a proxy server.
     * @param host Contains the hostname.
     * @param port Contains the port number.
     * @param realm The realm of the challenge and may be empty.
     * @param scheme The authentication scheme used, such as "basic" or "digest",
     * and will be empty if the source of the request is an FTP server.
     * @return Return true to continue the request and call
     * [[AuthCallback]].cont() either in this function or at a later time when
     * the authentication information is available. Return false to cancel the
     * request immediately.
     */
    (
        browser: Browser,
        frame: Frame,
        is_proxy: boolean,
        host: string,
        port: string,
        realm: string,
        scheme: string,
        callback: AuthCallback
    ) => boolean;

    /**
     * Called before sending a network request with a "Cookie"
     * request header.
     * @event
     */
    on_can_get_cookies: 
    /**
     * @return Return true to allow cookies to be included in the
     * network request or false to block cookies.
     * @param request Object should not be modified in this callback.
     */
    (
        browser: Browser,
        frame: Frame,
        request: Request
    ) => boolean;

    /**
     * Called when receiving a network request with a "Set-Cookie" response
     * header value represented by |cookie|.
     * @event
     */
    on_can_set_cookie:
    /**
     * @return Return true to allow the cookie to be stored or false to block the cookie.
     * @param request Object should not be modified in this callback.
     */
    (
        browser: Browser,
        frame: Frame,
        request: Request,
        cookie: Cookie
    ) => boolean;


    /**
     * Called when JavaScript requests a specific storage quota
     * size via the webkitStorageInfo.requestQuota function.
     * immediately.
     * @event
     */
    on_quota_request:
    /**
     * @param origin_url The origin of the page making the request.
     * @param new_size The requested quota size in bytes.
     * @return Return true to continue the request and call
     * [[RequestCallback]].cont() either in this function or at a later time to
     * grant or deny the request. Return false to cancel the request.
     */
    (
        browser: Browser,
        origin_url: string,
        new_size: number,
        callback: Callback
    ) => boolean;
    
    /**
     * Called when a plugin has crashed.
     * @event
     */
    on_plugin_crashed:
    /**
     * @param plugin_path The path of the plugin that crashed.
     */
    (
        browser: Browser,
        plugin_path: string
    ) => void;

    /**
     * Called when the render view associated with |browser| is ready to receive/handle IPC
     * messages in the render process.
     * @event
     */
    on_render_view_ready:
    (
        browser: Browser
    ) => void;

    /**
     * Called when the render process terminates unexpectedly.
     * @event
     */
    on_render_process_terminated:
    /**
     * @param status Indicates how the process terminated.
     */
    (
        browser: Browser,
        status: TerminationStatus
    ) => void;
}
