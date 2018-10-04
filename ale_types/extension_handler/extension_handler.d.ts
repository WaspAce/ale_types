declare class ExtensionHandler {
    constructor(delegate?: object);

    on_extension_load_failed: (
        result: CefErrorCode
    ) => void;
    on_extension_loaded: (
        extension: Extension
    ) => void;
    on_extension_unloaded: (
        extension: Extension
    ) => void;
    on_before_background_browser: (
        extension: Extension,
        url: string,
        settings: BrowserSettings
    ) => BrowserClient | null;
    on_before_browser: (
        extension: Extension,
        browser: Browser,
        active_browser: Browser,
        index: number,
        url: string,
        active: boolean,
        window_info: WindowInfo,
        settings: BrowserSettings
    ) => BrowserClient | null;
    on_get_active_browser: (
        extension: Extension,
        browser: Browser,
        include_incognito: boolean
    ) => Browser | null;
    on_can_access_browser: (
        extension: Extension,
        browser: Browser,
        include_incognito: boolean,
        target_browser: Browser
    ) => boolean;
    on_get_extension_resource: (
        extension: Extension,
        browser: Browser,
        file: string,
        callback: GetExtensionResourceCallback
    ) => boolean;

}
