/**
 * Class representing mouse event information.
 */
declare class MouseEvent {
    /**
     * X coordinate relative to the left side of the view.
     */
    x: number;

    /**
     * Y coordinate relative to the top side of the view.
     */
    y: number;

    /**
     * Array describing any pressed modifier keys. See
     * [[EventFlags]] for values.
     */
    modifiers: EventFlags[]
}
