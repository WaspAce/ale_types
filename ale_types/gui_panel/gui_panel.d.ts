declare class GuiPanel {
    constructor(
        parent: GuiControl,
        delegate?: object
    );

    paint(
        images: Image[]
    ): void;

}
