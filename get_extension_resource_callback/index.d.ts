/**
 * Callback class used for asynchronous continuation of
 * cef_extension_tHandler::GetExtensionResource.
 */
declare class GetExtensionResourceCallback {
    /**
     * Continue the request. Read the resource contents from |stream|.
     */
    cont(
        stream: StreamReader
    ): void;

    /**
     * Cancel the request.
     */
    cancel(): void;
}
