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
     * Called to retrieve the root window rectangle in screen coordinates.
     * @event
     */
    on_get_root_screen_rect:
    /**
     * Modify |rect| and return true if the rectangle was provided.
     * If this function returns false the rectangle from [[on_get_view_rect]] will be used.
     */
    (
        browser: Browser,
        rect: Rect
    ) => boolean;

    /**
     * Called to retrieve the view rectangle which is relative to screen
	 * coordinates.
     * @event
     */
    on_get_view_rect:
    /**
     * Modify |rect| if it was changed.
     * This function must always provide a non-null rectangle.
     */
    (
        browser: Browser,
        rect: Rect
    ) => void;

    /**
     * Called to retrieve the translation from view coordinates to actual screen
	 * coordinates.
     * @event
     */
    on_get_screen_point:
    /**
     * @return Return true if screen coordinates were provided.
     */
    (
        browser: Browser,
        view_point: Point,
        screen_point: Point
    ) => boolean;

    /**
     * Called to allow the client to fill in the [[ScreenInfo]] object with
     * appropriate values.
     * @event
     */
    on_get_screen_info:
    /**
     * If the screen info rectangle is left null the rectangle from on_get_view_rect
	 * will be used. If the rectangle is still null or invalid popups may not be
	 * drawn correctly.
     * @return Return true if the |screen_info| structure has been modified.
     */
    (
        browser: Browser,
        screen_info: ScreenInfo
    ) => boolean;

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
     * Add direct targets to draw images on.
     */
    add_draw_targets(
        targets: GuiPanel[] | Image[]
    )
}
