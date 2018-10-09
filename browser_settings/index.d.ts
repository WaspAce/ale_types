/**
 * Browser initialization settings.
 */
declare class BrowserSettings {
    /**
     * The maximum rate in frames per second (fps) that **RenderHandler.on_paint**
     * will be called. The actual fps may be lower if the browser cannot generate frames
     * at the requested rate. The minimum value is 1 and the maximum value is 60 (default 30).
     */
    frame_rate: number;

    /**
     * Default encoding for Web content. If empty "ISO-8859-1" will be used.
     */
    default_encoding: string;

    /**
     * Controls the loading of fonts from remote sources.
     */
    remote_fonts: boolean;

    /**
     * Controls whether JavaScript can be executed.
     */
    javascript: boolean;

    /**
     * Controls whether JavaScript can be used to close windows that were not
     * opened via JavaScript. JavaScript can still be used to close windows that
     * were opened via JavaScript or that have no back/forward history.
     */
    javascript_close_windows: boolean;

    /**
     * Controls whether any plugins will be loaded.
     */
    plugins: boolean;

    /**
     * Controls whether web security restrictions (same-origin policy) will be
     * enforced. Disabling this setting is not recommend as it will allow risky
     * security behavior such as cross-site scripting (XSS).
     */
    web_security: boolean;

    /**
     * Controls whether image URLs will be loaded from the network. A cached image
     * will still be rendered if requested.
     */
    image_loading: boolean;

    /**
     * Controls whether standalone images will be shrunk to fit the page.
     */
    image_shrink_standalone_to_fit: boolean;

    /**
     * Controls whether text areas can be resized.
     */
    text_area_resize: boolean;

    /**
     * Controls whether the tab key can advance focus to links.
     */
    tab_to_links: boolean;

    /**
     * Controls whether local storage can be used.
     */
    local_storage: boolean;

    /**
     * Controls whether databases can be used.
     */
    databases: boolean;

    /**
     * Controls whether the application cache can be used.
     */
    application_cache: boolean;

    /**
     * Controls whether WebGL can be used. Note that WebGL requires hardware
     * support and may not work on all systems even when enabled.
     */
    webgl: boolean;

    /**
     * Comma delimited ordered list of language codes without any whitespace that
     * will be used in the "Accept-Language" HTTP header. If empty then "en-US,en"
     * will be used.
     */
    accept_language_list: string;
}
