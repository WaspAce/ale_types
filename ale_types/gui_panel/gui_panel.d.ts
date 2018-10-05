declare class GuiPanel extends GuiControl {
    constructor(
        parent: GuiControl,
        delegate?: object
    );

    paint(
        images: Image[]
    ): void;

    on_enter: (
        rect: Rect
    ) => void;

    on_exit: () => void;

    on_key_down: (
        key_code: number,
        modifiers: EventFlags[]
    ) => void;

    on_key_up: (
        key_code: number,
        modifiers: EventFlags[]
    ) => void;

    on_key_press: (
        char: string
    ) => void;

    on_mouse_down: (
        button_type: MouseButtonType,
        x: number,
        y: number,
        modifiers: EventFlags[]
    ) => void;

    on_mouse_move: (
        x: number,
        y: number,
        modifiers: EventFlags[]
    ) => void;

    on_mouse_up: (
        button_type: MouseButtonType,
        x: number,
        y: number,
        modifiers: EventFlags[]
    ) => void;

    on_mouse_wheel: (
        delta: number,
        x: number,
        y: number,
        modifiers: EventFlags[]
    ) => void;
}
