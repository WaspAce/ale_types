declare class LoadHandler {
    constructor(
        delegate?: object
    );

    on_loading_state_change: (
        browser: Browser,
        is_loading: boolean,
        can_go_back: boolean,
        can_go_forward: boolean
    ) => void;

    on_load_start: (
        browser: Browser,
        frame: Frame,
        transition_type: TransitionType
    ) => void;

    on_load_end: (
        browser: Browser,
        frame: Frame,
        http_status_code: number
    ) => void;

    on_load_error: (
        browser: Browser,
        frame: Frame,
        error_code: CefErrorCode,
        error_text: string,
        failed_url: string
    ) => void;
}
