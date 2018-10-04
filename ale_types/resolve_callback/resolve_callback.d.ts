declare class ResolveCallback {
    constructor(delegate?: object);

    on_resolve_completed: (
        result: CefErrorCode,
        resolved_ips: StringList | null
    ) => void;
}
