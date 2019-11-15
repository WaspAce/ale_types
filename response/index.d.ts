declare class Response {
    /**
     * true if this object is read-only.
     */
    readonly is_read_only: boolean;

    /**
     * The response error code. ERR_NONE if there was no error.
     * This can be used by custom scheme handlers to
     * return errors during initial request processing.
     */
    error: CefErrorCode;

    /**
     * The response status code.
     */
    status: number;

    /**
     * The response status text.
     */
    status_text: string;

    /**
     * The response mime type.
     */
    mime_type: string;

    /**
     * The response charset.
     */
    charset: string;

    /**
     * The resolved URL after redirects or changed as a result of HSTS
     */
    url: string;
    

    /**
     * Get the value for the specified response header field.
     */
    get_header_by_name(
        name: string
    ): string;

    /**
     * Set the header |name| to |value|. If |overwrite| is true (1) any existing
     * values will be replaced with the new value. If |overwrite| is false (0) any
     * existing values will not be overwritten.
     */
    set_header_by_name(
        name: string,
        value: string,
        overwrite?: boolean
    ): void;

    /**
     * Get all response header fields.
     */
    get_header_map(): StringMultimap;

    /**
     * Set all response header fields.
     */
    set_header_map(
        header_map: StringMultimap
    ): void;
}
