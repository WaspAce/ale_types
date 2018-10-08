/**
 * Class to handle events related to browser load status.
 */
declare class LoadHandler {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
        delegate?: object
    );

    /**
     * Called when the loading state has changed. This callback will be executed
     * twice -- once when loading is initiated either programmatically or by user
     * action, and once when loading is terminated due to completion, cancellation
     * of failure. It will be called before any calls to on_load_start and after all
     * calls to on_load_error and/or on_load_end.
     * @event
     */
    on_loading_state_change:
    (
        browser: Browser,
        is_loading: boolean,
        can_go_back: boolean,
        can_go_forward: boolean
    ) => void;

    /**
     * Called after a navigation has been committed and before the browser begins
     * loading contents in the frame.
     * @event
     */
    on_load_start:
    /**
     * Multiple frames may be loading at the same time. Sub-frames may start or continue
     * loading after the main frame load has ended. This function will not be
     * called for same page navigations (fragments, history state, etc.) or for
     * navigations that fail or are canceled before commit. For notification of
     * overall browser load status use on_loading_state_change instead.
     * @param frame Value will never be null -- call the is_main() function to
     * check if this frame is the main frame.
     * @param transition_type Provides information about the source of the navigation.
     */
    (
        browser: Browser,
        frame: Frame,
        transition_type: TransitionType
    ) => void;

    /**
     * Called when the browser is done loading a frame.
     * @event
     */
    on_load_end:
    /**
     * Multiple frames may be loading at the same time. Sub-frames may start or continue
     * loading after the main frame load has ended. This function will not be
     * called for same page navigations (fragments, history state, etc.) or for
     * navigations that fail or are canceled before commit. For notification of
     * overall browser load status use on_loading_state_change instead.
     * @param frame Value will never be null -- call the is_main() function to
     * check if this frame is the main frame.
     */
    (
        browser: Browser,
        frame: Frame,
        http_status_code: number
    ) => void;

    /**
     * Called when a navigation fails or is canceled. This function may be called
     * by itself if before commit or in combination with on_load_start/on_load_end if
     * after commit.
     * @param error_code The error code number. See
     * net\base\net_error_list.h for complete descriptions of the error codes.
     * @param error_text The error text.
     * @param failed_url The URL that failed to load.
     * @event
     */
    on_load_error: (
        browser: Browser,
        frame: Frame,
        error_code: CefErrorCode,
        error_text: string,
        failed_url: string
    ) => void;
}
