
declare class DisplayHandler {
    on_address_change: (
        browser: Browser,
        frame: Frame,
        url: string
    ) => void;
    on_title_change: (
        browser: Browser,
        title: string
    ) => void;
    on_favicon_url_change: (
        browser: Browser,
        icon_urls: StringList
    ) => void;
    on_fullscreen_mode_change: (
        browser: Browser,
        fullscreen: boolean
    ) => void;
    on_tooltip: (
        browser: Browser,
        text: string
    ) => void;
    on_status_message: (
        browser: Browser,
        value: string
    ) => void;
    on_console_message: (
        browser: Browser,
        level: LogSeverity,
        message: string,
        source: string,
        line: number
    ) => void;
    on_auto_resize: (
        browser: Browser,
        new_size: Size,
    ) => boolean;
    on_loading_progress_change: (
        browser: Browser,
        progress: number
    ) => void;
}
