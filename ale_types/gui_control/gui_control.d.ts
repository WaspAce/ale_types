declare abstract class GuiControl {
    constructor(
        delegate?: object
    );

    align: number;
    anchors: AnchorKind[];
    caption: string;
    enabled: boolean;
    visible: boolean;
    readonly rect: Rect;

    on_resize: (
        rect: Rect
    ) => void;

    on_click: () => void;
}
