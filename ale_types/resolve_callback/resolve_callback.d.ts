/**
 * Callback class for [[RequestContext]].resolve_host.
 */
declare class ResolveCallback {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
        delegate?: object
    );

    /**
     * Called asynchronously after the resolve_host request has completed.
     * @event
     */
    on_resolve_completed:
    /**
     * @param result Will be the result code.
     * @param resolved_ips Will be the list of
     * resolved IP addresses or null if the resolution failed.
     */
    (
        result: CefErrorCode,
        resolved_ips: StringList | null
    ) => void;
}
