/// <reference path="../display_handler/display_handler.d.ts" />
/// <reference path="../find_handler/find_handler.d.ts" />
/// <reference path="../focus_handler/focus_handler.d.ts" />
/// <reference path="../context_menu_handler/context_menu_handler.d.ts" />
/// <reference path="../js_dialog_handler/js_dialog_handler.d.ts" />
/// <reference path="../life_span_handler/life_span_handler.d.ts" />
/// <reference path="../load_handler/load_handler.d.ts" />
/// <reference path="../render_handler/render_handler.d.ts" />
/// <reference path="../request_handler/request_handler.d.ts" />


declare class BrowserClient {
    constructor(delegate?: object);

    display_handler: DisplayHandler;
    find_handler: FindHandler;
    focus_handler: FocusHandler;
    context_menu_handler: ContextMenuHandler;
    js_dialog_handler: JsDialogHandler;
    life_span_handler: LifeSpanHandler;
    load_handler: LoadHandler;
    render_handler: RenderHandler;
    request_handler: RequestHandler;

}
