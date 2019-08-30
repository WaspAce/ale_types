/**
 * 
 */
declare class BrowserHost {
    /**
     * The hosted browser object.
     */
    readonly browser: Browser;

    /**
     * The client for this browser.
     */
    readonly client: BrowserClient;

    /**
     * The request context for this browser.
     */
    readonly request_context: RequestContext;

    /**
     * The current zoom level. The default zoom level is 0.0.
     */
    zoom_level: number;

    /**
     * True if this browser currently has an associated DevTools
     * browser.
     */
    readonly has_dev_tools: boolean;

    /**
     * Whether mouse cursor change is disabled.
     */
    is_mouse_cursor_change_disabled: boolean;

    /**
     * The maximum rate in frames per second (fps) that
     * [[RenderHandler]].on_paint will be called for a windowless browser. The
     * actual fps may be lower if the browser cannot generate frames at the
     * requested rate. The minimum value is 1 and the maximum value is 60 (default
     * 30).
     */
    frame_rate: number;

    /**
     * Set to **true** to mute audio.
     */
    audio_muted: boolean;

    /**
     * The current visible navigation entry for this browser.
     */
    readonly visible_navigation_entry: NavigationEntry;

    /**
     * The extension hosted in this browser or null if no extension is
     * hosted. See [[RequestContext]].load_extension for details.
     */
    readonly extension: Extension | null;

    /**
     * true if this browser is hosting an extension background script.
     * Background hosts do not have a window and are not displayable. See
     * [[RequestContext]].load_extension for details.
     */
    readonly is_background_host: boolean;


    /**
     * Request that the browser close. The JavaScript 'onbeforeunload' event will
     * be fired. If |force_close| is false the event handler, if any, will be
     * allowed to prompt the user and the user can optionally cancel the close. If
     * |force_close| is true the prompt will not be displayed and the close
     * will proceed. Results in a call to [[LifeSpanHandler]].on_close() if
     * the event handler allows the close or if |force_close| is true. See
     * [[LifeSpanHandler]].on_close() documentation for additional usage
     * information.
     */
    close_browser(
        force_close: boolean
    ): void;

    /**
     * Helper for closing a browser. Call this function from the top-level window
     * close handler. Internally this calls close_browser(false) if the close
     * has not yet been initiated. See close_browser() and [[LifeSpanHandler]].on_close()
     * documentation for additional usage information.
     * @returns This function returns false while the close
     * is pending and true after the close has completed.
     */
    try_close_browser(): boolean;

    /**
     * Set whether the browser is focused.
     */
    set_focus(
        focus: boolean
    ): void;

    /**
     * Search for |searchText|. The [[FindHandler]] instance, if any, set in
     * [[BrowserClient]].find_handler property will be called to report find results.
     * @param identifier Must be a unique ID and these IDs must strictly increase so
     * that newer requests always have greater IDs than older requests.
     * If |identifier| is zero or less than the previous ID value then it will be
     * automatically assigned a new valid ID.
     * @param forward Indicates whether to search forward or backward within the page.
     * @param match_case Indicates whether the search should be case-sensitive.
     * @param find_next indicates whether this is the first request or a follow-up.
     */
    find(
        identifier: number,
        forward: boolean,
        match_case: boolean,
        find_next: boolean
    ): void;

    /**
     * Cancel all searches that are currently going on.
     */
    stop_finding(
        clear_selection: boolean
    ): void;

    /**
     * Open developer tools (DevTools) in its own browser. The DevTools browser
     * will remain associated with this browser. If the DevTools browser is
     * already open then it will be focused, in which case the |window_info|,
     * |client| and |settings| parameters will be ignored. If |inspect_element_at|
     * is set then the element at the specified (x,y) location will be
     * inspected.
     */
    show_dev_tools(
        window_info: WindowInfo,
        client: BrowserClient,
        settings: BrowserSettings,
        inspect_element_at?: Point
    ): void;

    /**
     * Explicitly close the associated DevTools browser, if any.
     */
    close_dev_tools(): void;

    /**
     * Retrieve a snapshot of current navigation entries as values sent to the
     * specified visitor. If |current_only| is true only the current
     * navigation entry will be sent, otherwise all navigation entries will be
     * sent.
     */
    get_navigation_entries(
        visitor: NavigationEntryVisitor,
        current_only: boolean
    ): void;

    /**
     * If a misspelled word is currently selected in an editable node calling this
     * function will replace it with the specified |word|.
     */
    replace_misspelling(
        word: string
    ): void;

    /**
     * Add the specified |word| to the spelling dictionary.
     */
    add_word_to_dictionary(
        word: string
    ): void;

    /**
     * Notify the browser that the widget has been resized. The browser will first
     * read [[RenderHandler]].view_rect to get the new size and then call
     * [[RenderHandler]].on_paint asynchronously with the updated regions.
     */
    was_resized(): void;

    /**
     * Notify the browser that it has been hidden or shown. Layouting and
     * [[RenderHandler]].on_paint notification will stop when the browser is
     * hidden.
     */
    was_hidden(
        hidden: boolean
    ): void;

    /**
     * Send a notification to the browser that the screen info has changed. The
     * browser will then read [[RenderHandler]].screen_info to update the
     * screen information with the new values. This simulates moving the webview
     * window from one display to another, or changing the properties of the
     * current display.
     */
    notify_screen_info_changed(): void;

    /**
     * Invalidate the view. The browser will call [[RenderHandler]].on_paint
     * asynchronously.
     */
    invalidate(
        type: PaintElementType
    ): void;

    /**
     * Issue a BeginFrame request to Chromium. Only valid when
     * [[WindowInfo]].external_begin_frame_enabled is set to true.
     */
    send_external_begin_frame(): void;

    /**
     * Send a key event to the browser.
     */
    send_key_event(
        event: KeyEvent
    ): void;

    /**
     * Send a mouse click event to the browser. The |x| and |y| coordinates are
     * relative to the upper-left corner of the view.
     */
    send_mouse_click_event(
        event: MouseEvent,
        type: MouseButtonType,
        mouse_up: boolean,
        click_count: number
    ): void;

    /**
     * Send a mouse move event to the browser. The |x| and |y| coordinates are
     * relative to the upper-left corner of the view.
     * The event will be skipped if less than 15 milliseconds have passed from the last one.
     */
    send_mouse_move_event(
        event: MouseEvent,
        mouse_leave: boolean
    ): void;

    /**
     * Send a mouse wheel event to the browser. The |x| and |y| coordinates are
     * relative to the upper-left corner of the view. The |delta_x| and |delta_y|
     * values represent the movement delta in the X and Y directions respectively.
     * In order to scroll inside select popups [[RenderHandler]].on_get_screen_point
     * should be implemented properly.
     */
    send_mouse_wheel_event(
        event: MouseEvent,
        delta_x: number,
        delta_y: number
    ): void;

    /**
     * Send a touch event to the browser.
     */
    send_touch_event(
        event: TouchEvent
    ): void;

    /**
     * Send a focus event to the browser.
     */
    send_focus_event(
        focus: boolean
    ): void;


    /**
     * Send a capture lost event to the browser.
     */
    send_capture_lost_event(): void;

    /**
     * Notify the browser that the window hosting it is about to be moved or
     * resized. This function is only used on Windows and Linux.
     */
    notify_move_or_resize_started(): void;

    /**
     * Begins a new composition or updates the existing composition. Blink has a
     * special node (a composition node) that allows the input function to change
     * text without affecting other DOM nodes. |text| is the optional text that
     * will be inserted into the composition node. |underlines| is an optional set
     * of ranges that will be underlined in the resulting text.
     * |replacement_range| is an optional range of the existing text that will be
     * replaced. |selection_range| is an optional range of the resulting text that
     * will be selected after insertion or replacement. The |replacement_range|
     * value is only used on OS X.
         *
     * This function may be called multiple times as the composition changes. When
     * the client is done making changes the composition should either be canceled
     * or completed. To cancel the composition call ImeCancelComposition. To
     * complete the composition call either ImeCommitText or
     * ImeFinishComposingText. Completion is usually signaled when:
     *   A. The client receives a WM_IME_COMPOSITION message with a GCS_RESULTSTR
     *      flag (on Windows), or;
     *   B. The client receives a "commit" signal of GtkIMContext (on Linux), or;
     *   C. insertText of NSTextInput is called (on Mac).
     */
    ime_set_composition(
        text: string,
        underlines: CompositionUnderline,
        replacement_range: Range,
        selection_range: Range
    ): void;

    /**
     * Completes the existing composition by optionally inserting the specified
     * |text| into the composition node. |replacement_range| is an optional range
     * of the existing text that will be replaced. |relative_cursor_pos| is where
     * the cursor will be positioned relative to the current cursor position. See
     * comments on ImeSetComposition for usage. The |replacement_range| and
     * |relative_cursor_pos| values are only used on OS X. This function is only
     * used when window rendering is disabled.
     */
    ime_commit_text(
        text: string,
        replacement_range: Range,
        relative_cursor_pos: number
    ): void;

    /**
     * Completes the existing composition by applying the current composition node
     * contents. If |keep_selection| is false the current selection, if any,
     * will be discarded. See comments on ImeSetComposition for usage. This
     * function is only used when window rendering is disabled.
     */
    ime_finish_composing_text(
        keep_selection: boolean
    ): void;

    /**
     * Cancels the existing composition and discards the composition node contents
     * without applying them. See comments on ime_set_composition for usage. This
     * function is only used when window rendering is disabled.
     */
    ime_cancel_composition();

    /**
     * Enable notifications of auto resize via
     * cef_display_handler_t::OnAutoResize. Notifications are disabled by default.
     * |min_size| and |max_size| define the range of allowed sizes.
     */
    set_auto_resize_enabled(
        enabled: boolean,
        min_size: Size,
        max_size: Size
    ): void;
}
