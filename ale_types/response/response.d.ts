declare class Response {
    readonly is_read_only: boolean;
    error: CefErrorCode;
    status: number;
    status_text: string;
    mime_type: string;

    get_header(
        name: string
    ): string;

    get_header_map(): StringMultimap;

    set_header_map(
        header_map: StringMultimap
    ): void;
}
