/**
 * Flags that represent [[URLRequest]] status.
 */
declare enum UrlRequestStatus {
    /**
     * Unknown status.
     */
    UR_UNKNOWN = 0,

    /**
     * Request succeeded.
     */
    UR_SUCCESS = 1,

    /**
     * An IO request is pending, and the caller will be informed when it is
     * completed.
     */
    UR_IO_PENDING = 2,

    /**
     * Request was canceled programatically.
     */
    UR_CANCELED = 3,

    /**
     * Request failed for some reason.
     */
    UR_FAILED = 4
}
