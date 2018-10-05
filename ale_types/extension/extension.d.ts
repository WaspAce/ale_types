/**
 * Class representing an extension.
 */
declare class Extension {
    /**
     * The unique extension identifier. This is calculated based on the
     * extension public key, if available, or on the extension path. See
     * https://developer.chrome.com/extensions/manifest/key for details.
     */
    readonly identifier: string;

    /**
     * The absolute path to the extension directory on disk. This value
     * will be prefixed with PK_DIR_RESOURCES if a relative path was passed to
     * RequestContext.load_extension().
     */
    readonly path: string;

    /**
     * **true** if this extension is currently loaded.
     */
    readonly is_loaded: boolean;


    /**
     * @returns The extension manifest contents as a DictionaryValue object.
     * See https://developer.chrome.com/extensions/manifest for details.
     */
    get_manifest(): DictionaryValue;

    /**
     * @returns **true** if this object is the same extension as |that| object.
     * Extensions are considered the same if identifier, path and loader context
     * match.
     */
    is_same(
        that: Extension
    ): boolean;

    /**
     * @returns the handler for this extension. Will return null for internal
     * extensions or if no handler was passed to RequestContext.load_extension().
     */
    get_handler(): ExtensionHandler | null;

    /**
     * @returns The request context that loaded this extension. Will return null
     * for internal extensions or if the extension has been unloaded. See the
     * RequestContext.load_extension() documentation for more information
     * about loader contexts.
     */
    get_loader_context(): RequestContext | null;

    /**
     * Unload this extension if it is not an internal extension and is currently
     * loaded. Will result in a call to ExtensionHandler.on_extension_unloaded() on success.
     */
    unload(): void;
}
