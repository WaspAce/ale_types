declare class BrowserHost {
    readonly browser: Browser;
    readonly has_view: boolean;
    readonly client: BrowserClient;
    readonly request_context: RequestContext;
    zoom_level: number;
    readonly has_dev_tools: boolean;
    is_mouse_cursor_change_disabled: boolean;
    frame_rate: number;
    readonly visible_navigation_entry: NavigationEntry;
    readonly extension: Extension;
    readonly is_background_host: boolean;

    close_browser(
        force_close: boolean
    ): void;

    try_close_browser(): boolean;

    set_focus(
        focus: boolean
    ): void;

    find(
        identifier: number,
        forward: boolean,
        match_case: boolean,
        find_next: boolean
    ): void;

    stop_finding(
        clear_selection: boolean
    ): void;

    show_dev_tools(
        window_info: WindowInfo,
        client: BrowserClient,
        settings: BrowserSettings,
        inspect_element_at: Point
    ): void;

    close_dev_tools(): void;

    get_navigation_entries(
        visitor: NavigationEntryVisitor,
        current_only: boolean
    ): void;

    replace_misspelling(
        word: string
    ): void;

    add_word_to_dictionary(
        word: string
    ): void;

    was_resize(): void;

    was_hidden(
        hidden: boolean
    ): void;

    notify_screen_info_changed(): void;

    invalidate(
        type: PaintElementType
    ): void;

    send_key_event(
        event: KeyEvent
    ): void;

    send_mouse_click_event(
        event: MouseEvent,
        type: MouseButtonType,
        mouse_up: boolean,
        click_count: number
    ): void;

    send_mouse_move_event(
        event: MouseEvent,
        mouse_leave: boolean
    ): void;

    send_mouse_wheel_event(
        event: MouseEvent,
        delta_x: number,
        delta_y: number
    ): void;

    send_focus_event(
        focus: boolean
    ): void;

    send_capture_lost_event(): void;

    notify_move_or_resize_started(): void;

    ime_set_composition(
        text: string,
        underlines: CompositionUnderline,
        replacement_range: Range,
        selection_range: Range
    ): void;

    ime_commit_text(
        text: string,
        replacement_range: Range,
        relative_cursor_pos: number
    ): void;

    ime_finish_composing_text(
        keep_selection: boolean
    ): void;

    ime_cancel_composition();

    set_auto_resize_enabled(
        enabled: boolean,
        min_size: Size,
        max_size: Size
    ): void;
}
