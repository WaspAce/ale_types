declare class GuiPanel extends GuiControl {
    /**
     * @param parent The parent control which will contain this control.
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
        parent: GuiControl,
        delegate?: object
    );

    /**
     * Draw |images| on this control's canvas.
     */
    paint(
        images: Image[]
    ): void;

    /**
     * Occurs when a control receives the input focus.
     * @event
     */
    on_enter: () => void;

    /**
     * Occurs when the input focus shifts away from one control to another.
     * @event
     */
    on_exit: () => void;

    /**
     * Occurs when a user presses any key while the panel has focus.
     * @event
     */
    on_key_down:
    (
        key_code: number,
        modifiers: EventFlags[]
    ) => void;

    /**
     * Occurs when the user releases a key that has been pressed.
     * @event
     */
    on_key_up:
    (
        key_code: number,
        modifiers: EventFlags[]
    ) => void;

    /**
     * Occurs when a key is pressed.
     * @event
     */
    on_key_press:
    (
        char: string
    ) => void;

    /**
     * Occurs when the user presses a mouse button with the mouse pointer over a panel.
     * @event
     */
    on_mouse_down:
    (
        button_type: MouseButtonType,
        x: number,
        y: number,
        modifiers: EventFlags[]
    ) => void;

    /**
     * Occurs when the user moves the mouse pointer while the mouse pointer is over a control.
     * @event
     */
    on_mouse_move:
    (
        x: number,
        y: number,
        modifiers: EventFlags[]
    ) => void;

    /**
     * Occurs when the user releases a mouse button that was pressed with the mouse pointer over a component.
     * @event
     */
    on_mouse_up:
    (
        button_type: MouseButtonType,
        x: number,
        y: number,
        modifiers: EventFlags[]
    ) => void;

    /**
     * Occurs when the mouse wheel is rotated.
     * @event
     */
    on_mouse_wheel:
    (
        delta: number,
        x: number,
        y: number,
        modifiers: EventFlags[]
    ) => void;
}
