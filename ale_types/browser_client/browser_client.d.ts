/**
 * Implement this structure to provide handler implementations.
 */
declare class BrowserClient {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(delegate?: object);

    /**
     * The handler for context menus. If no handler is provided the default
     * implementation will be used.
     */
    context_menu_handler: ContextMenuHandler;

    /**
     * The handler for browser display state events.
     */
    display_handler: DisplayHandler;

    /**
     * The handler for find result events.
     */
    find_handler: FindHandler;

    /**
     * The handler for focus events.
     */
    focus_handler: FocusHandler;

    /**
     * The handler for JavaScript dialogs. If no handler is provided the
     * default implementation will be used.
     */
    js_dialog_handler: JsDialogHandler;

    /**
     * The handler for browser life span events.
     */
    life_span_handler: LifeSpanHandler;

    /**
     * The handler for browser load status events.
     */
    load_handler: LoadHandler;

    /**
     * The handler for rendering events.
     */
    render_handler: RenderHandler;

    /**
     * The handler for browser request events.
     */
    request_handler: RequestHandler;

    /**
     * Called when a new message is received from a different process.
     * @event
     */
    on_process_message_received: (browser: Browser, message: ProcessMessage) => void;

}
