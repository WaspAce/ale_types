declare class LifeSpanHandler {
    constructor(
        delegate?: object
    );

    on_before_popup: (
        browser: Browser,
        frame: Frame,
        target_url: string,
        target_frame_name: string,
        target_disposition: WindowOpenDisposition,
        user_gesture: boolean,
        popup_features: PopupFeatures,
        window_info: WindowInfo,
        settings: BrowserSettings
    ) => {
        allow: boolean,
        client: BrowserClient,
        no_javascript_access: boolean
    };

    on_after_created: (
        browser: Browser
    ) => void;

    on_close: (
        browser: Browser
    ) => boolean;

    on_before_close: (
        browser: Browser
    ) => void;
}
