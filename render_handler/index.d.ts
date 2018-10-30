/**
 * Class to handle render events.
 */
declare class RenderHandler {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
        delegate?: object
    );

    /**
     * The root window rectangle in screen coordinates.
     */
    root_screen_rect: Rect;

    /**
     * The view rectangle which is relative to screen
     * coordinates.
     */
    view_rect: Rect;

    /**
     * The client to fill in the [[ScreenInfo]] object with
     * appropriate values.
     */
    screen_info: ScreenInfo;


    /**
     * Called when the browser wants to show or hide the popup widget.
     * @event
     */
    on_popup_show:
    /**
     * @param show The popup should be shown if |show| is true and hidden if |show| is false.
     */
    (
        browser: Browser,
        show: boolean
    ) => void;

    /**
     * Called when the browser wants to move or resize the popup widget.
     * @event
     */
    on_popup_size:
    /**
     * @param rect Contains the new location and size in view coordinates.
     */
    (
        browser: Browser,
        rect: Rect
    ) => void;


    /**
     * Called when an elements of |browser| should be painted.
     * @event
     */
    on_paint:
    /**
     * @param images Contains repainted images of |browser| view.
     */
    (
        browser: Browser,
        images: Image[]
    ) => void;

    /**
     * TODO
     */
    on_cursor_change:() => void;

    /**
     * Called when the scroll offset has changed.
     * @event
     */
    on_scroll_offset_changed:(
        browser: Browser,
        x: number,
        y: number
    ) => void;

    /**
     * Called when the IME composition range has changed.
     * @event
     */
    on_ime_composition_range_changed:
    /**
     * @param selected_range The range of characters that have been selected.
     * @param character_bounds The bounds of each character in view coordinates.
     */
    (
        browser: Browser,
        selected_range: Range,
        character_bounds: Range[]
    ) => void;

    /**
     * Called to retrieve the translation from view coordinates to actual screen
	 * coordinates.
     */
    on_get_screen_point:
    /**
     * @return Return true if the screen coordinates were provided.
     */
    (
        browser: Browser,
        view_point: Point,
        screen_point: Point
    ) => boolean;

    /**
     * Add direct targets to draw images on.
     */
    add_draw_targets(
        targets: GuiPanel[] | Image[]
    )
}
