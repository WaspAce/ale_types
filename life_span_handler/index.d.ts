/**
 * Implement this structure to handle events related to browser life span.
 */
declare class LifeSpanHandler {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
        delegate?: object
    );


    /**
     * Called before a new popup browser is created.
     * @event
     */
    on_before_popup:
    /**
     * The |browser| and |frame| values represent the source of the popup request.
     * The |target_url| and |target_frame_name| values indicate where the popup
     * browser should navigate and may be empty if not specified with the request.
     * Popup browser creation will be canceled if
     * the parent browser is destroyed before the popup browser creation completes
     * (indicated by a call to on_after_created for the popup browser).
     * @param target_disposition Value indicates where the user intended to open
     * the popup (e.g. current tab, new tab, etc).
     * @param user_gesture value will be true if the popup was opened via explicit
     * user gesture (e.g. clicking a link) or false if the popup opened automatically
     * (e.g. via the DomContentLoaded event).
     * @param popup_features Object contains additional information about the requested popup window.
     * @return To allow creation of the popup browser optionally modify |window_info| and |settings| and
     * return suitable object. To cancel creation of the
     * popup browser return object with |allow| false.
     * @param settings Will default to the source browser's values.
     * @param no_javascript_access If value is set to false the new browser will not be scriptable and may not be
     * hosted in the same renderer process as the source browser.
     * @param |extra_info| parameter provides an opportunity to specify extra information
     * specific to the created popup browser that will be passed to
     * [[RenderProcessHandler]].on_browser_created() in the render process.
     */
    (
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
        no_javascript_access: boolean,
        extra_info?: DictionaryValue
    };

    /**
     * Called after a new browser is created.
     * @event
     */
    on_after_created:
    /**
     * This callback will be the first notification that references |browser|.
     */
    (
        browser: Browser
    ) => void;

    /**
     * Called when a browser has recieved a request to close. This may result
     * directly from a call to [[BrowserHost]].close_browser() or indirectly
     * if the browser is parented to a top-level window created by CEF and the
     * user attempts to close that window (by clicking the 'X', for example). The
     * on_close() function will be called after the JavaScript 'onunload' event
     * has been fired.
     *
     * An application should handle top-level owner window close notifications by
     * calling [[BrowserHost]].try_close_browser() or
     * [[BrowserHost]].close_browser(false) instead of allowing the window
     * to close immediately (see the examples below). This gives CEF an
     * opportunity to process the 'onbeforeunload' event and optionally cancel the
     * close before on_close() is called.
     *
     * Returning false from on_close() will cause the browser object to be destroyed immediately.
     *
     * If the browser's top-level owner window requires a non-standard close
     * notification then send that notification from on_close() and return true.
     *
     * The [[LifeSpanHandler]].on_before_close() function will be called
     * after on_close() (if on_close() is called) and immediately before the
     * browser object is destroyed. The application should only exit after
     * on_before_close() has been called for all existing browsers.
     *
     * The below examples describe what should happen during window close when the
     * browser is parented to an application-provided top-level window.
     *
     * Example 1: Using [[BrowserHost]].try_close_browser().
     * This is recommended for clients using standard close handling and windows created
     * on the browser process UI thread.
     * 1.  User clicks the window close button which sends a close notification to
     *     the application's top-level window.
     * 2.  Application's top-level window receives the close notification and
     *     calls try_close_browser() (which internally calls close_browser(false)).
     *     try_close_browser() returns false so the client cancels the window close.
     * 3.  JavaScript 'onbeforeunload' handler executes and shows the close
     *     confirmation dialog (which can be overridden via
     *     [[JsDialogHandler]].on_before_unload_dialog()).
     * 4.  User approves the close.
     * 5.  JavaScript 'onunload' handler executes.
     * 6.  CEF sends a close notification to the application's top-level window
     *     (because on_close() returned false by default).
     * 7.  Application's top-level window receives the close notification and
     *     calls try_close_browser(). try_close_browser() returns true so the client
     *     allows the window close.
     * 8.  Application's top-level window is destroyed.
     * 9.  Application's on_before_close() handler is called and the browser object
     *     is destroyed.
     * 10. Application exits if no other browsers
     *     exist.
     *
     * Example 2: Using [[BrowserHost]].close_browser(false) and
     * implementing the on_close() callback. This is recommended for clients using
     * non-standard close handling or windows that were not created on the browser
     * process UI thread.
     * 1.  User clicks the window close button which sends a close notification to
     *     the application's top-level window.
     * 2.  Application's top-level window receives the close notification and:
     *     A. Calls [[BrowserHost]].close_browser(false).
     *     B. Cancels the window close.
     * 3.  JavaScript 'onbeforeunload' handler executes and shows the close
     *     confirmation dialog (which can be overridden via
     *     [[JsDialogHandler]].on_before_unload_dialog()).
     * 4.  User approves the close.
     * 5.  JavaScript 'onunload' handler executes.
     * 6.  Application's on_close() handler is called. Application will:
     *     A. Set a flag to indicate that the next close attempt will be allowed.
     *     B. Return false.
     * 7.  CEF sends an close notification to the application's top-level window.
     * 8.  Application's top-level window receives the close notification and
     *     allows the window to close based on the flag from #6B.
     * 9.  Application's top-level window is destroyed.
     * 10. Application's on_before_close() handler is called and the browser object
     *     is destroyed.
     * 11. Application exits if no other browsers exist.
     * @event
     */
    on_close: (
        browser: Browser
    ) => boolean;

    /**
     * Called just before a browser is destroyed.
     * @event
     */
    on_before_close:
    /**
     * Release all references to the browser object and do not attempt to
     * execute any functions on the browser object (other than get_identifier or is_same)
     * after this callback returns.
     * This callback will be the last notification that references |browser|.
     * Any in-progress network requests associated with |browser|
     * will be aborted when the browser is destroyed, and
     * [[ResourceRequestHandler]] callbacks related to those requests may
     * still arrive after this function is called.
     * See on_close() documentation for additional usage information.
     */
    (
        browser: Browser
    ) => void;
}
