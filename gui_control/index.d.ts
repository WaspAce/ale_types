/**
 * Abstract class for gui controls.
 */
declare abstract class GuiControl {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
        delegate?: object
    );

    /**
     * The alignment of a control within its parent
     */
    align: AlignType;

    /**
     * Specifies how a control is anchored to its parent.
     */
    anchors: AnchorKind[];

    /**
     * Caption of the control.
     */
    caption: string;

    /**
     * Indicates whether control enabled.
     */
    enabled: boolean;

    /**
     * Indicates whether control visible.
     */
    visible: boolean;

    /**
     * Rectangle of the control. Relative to parent control's coordinates.
     */
    readonly rect: Rect;

    /**
     * Converts absolute Screen coordinates into Client relative coordinates.
     */
    client_to_screen(
        point: Point
    ): Point;

    /**
     * Translates a given point from client area coordinates to global screen coordinates.
     */
    screen_to_client(
        point: Point
    ): Point;

    /**
     * Called when control is ready.
     * @event
     */
    on_ready:() => void;

    /**
     * Called when control resized.
     * @event
     */
    on_resize:
    /**
     * @param rect The new control's rectangle.
     */
    (
        rect: Rect
    ) => void;

    /**
     * Called when control clicked.
     * @event
     */
    on_click: () => void;

    /**
     * Called when control's rect coordinates changed.
     * @event
     */
    on_change_bounds:
    /**
     * @param rect The new control's rectangle.
     */
    (
        rect: Rect
    ) => void;
}
