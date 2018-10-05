declare class RequestHandler {
    constructor(
        delegate?: object
    );

    on_before_browse: (
        browser: Browser,
        frame: Frame,
        request: Request,
        is_redirect: boolean
    ) => void;

    on_open_url_from_tab: (
        browser: Browser,
        frame: Frame,
        target_url: string,
        target_disposition: WindowOpenDisposition,
        user_gesture: boolean
    ) => boolean;

    on_before_resource_load: (
        browser: Browser,
        frame: Frame,
        request: Request
    ) => boolean;

    on_get_resource_handler: (
        browser: Browser,
        frame: Frame,
        request: Request
    ) => void;

    on_resource_redirect: (
        browser: Browser,
        frame: Frame,
        request: Request,
        response: Response
    ) => boolean;

    on_resource_load_complete: (
        browser: Browser,
        frame: Frame,
        request: Request,
        response: Response,
        status: UrlRequestStatus,
        received_content_length: number
    ) => number;

    on_get_auth_credentials: (
        browser: Browser,
        frame: Frame,
        is_proxy: boolean,
        host: string,
        port: string,
        realm: string,
        scheme: string,
    ) => boolean;

    on_quota_request: (
        browser: Browser,
        origin_url: string,
        new_size: number,
        callback: Callback
    ) => boolean;

    on_protocol_execution: (
        browser: Browser,
        url: string,
        allow_os_execution: boolean
    ) => void;

    on_certificate_error: () => void;

    on_select_client_certificate : () => void;

    on_plugin_crashed: (
        browser: Browser,
        plugin_path: string
    ) => void;

    on_render_view_ready: (
        browser: Browser
    ) => void;

    on_render_process_terminated: (
        browser: Browser,
        status: TerminationStatus
    ) => void;
}
