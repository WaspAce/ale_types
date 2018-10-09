/**
 * Class used to represent an entry in navigation history.
 */
declare class NavigationEntry {
    /**
     * true if this object is valid. Do not call any other functions
     * if this is false.
     */
    readonly is_valid: boolean;

    /**
     * The actual URL of the page. For some pages this may be data: URL or
     * similar. Use display_url to return a display-friendly version.
     */
    readonly url: string;

    /**
     * A display-friendly version of the URL.
     */
    readonly display_url:string;

    /**
     * The original URL that was entered by the user before any redirects.
     */
    readonly original_url: string;

    /**
     * The title set by the page. This value may be empty.
     */
    readonly title: string;

    /**
     * The transition type which indicates what the user did to move to
     * this page from the previous page.
     */
    readonly transition_type: TransitionType;

    /**
     * true if this navigation includes post data.
     */
    readonly has_pos_data: boolean;

    /**
     * The time for the last known successful navigation completion. A
     * navigation may be completed more than once if the page is reloaded. May be
     * 0 if the navigation has not yet completed.
     */
    readonly completion_time: CefTime;

    /**
     * The HTTP status code for the last known successful navigation
     * response. May be 0 if the response has not yet been received or if the
     * navigation has not yet completed.
     */
    readonly http_status_code: number;
}
