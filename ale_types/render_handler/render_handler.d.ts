declare class RenderHandler {
    constructor(
        delegate?: object
    );

    readonly root_screen_rect: Rect;
    readonly view_rect: Rect;
    readonly screen_info: ScreenInfo;

    on_popup_show:(
        browser: Browser,
        show: boolean
    ) => void;

    on_popup_size:(
        browser: Browser,
        rect: Rect
    ) => void;

    on_paint:(
        browser: Browser,
        images: Image[]
    ) => void;

    on_cursor_change:() => void;

    on_scroll_offset_changed:(
        browser: Browser,
        x: number,
        y: number
    ) => void;

    on_ime_composition_range_changed:(
        browser: Browser,
        selected_range: Range,
        character_bounds: Range[]
    ) => void;

    add_draw_targets(
        targets: GuiPanel[] | Image[]
    )
}
