declare class JsDialogHandler {
    constructor(
        delegate?: object
    );

    on_js_dialog: (
        browser: Browser,
        origin_url: string,
        dialog_type: JsDialogType,
        message_text: string,
        default_prompt_text: string,
        callback: JsDialogCallback
    ) => boolean;

    on_before_unload_dialog: (
        browser: Browser,
        message_text: string,
        is_reload: boolean,
        callback: JsDialogCallback
    ) => void;

    on_reset_dialog_state: (
        browser: Browser
    ) => void;
}
