/**
 *  Divides the client area of a [[GuiControl]] into resizable panes.
 */
declare class GuiSplitter extends GuiControl {
  /**
   * Specifies the minimum size, in pixels, of the panes on either side of the splitter.
   */
  min_size: number;

  /**
   * Specifies how a control is anchored to its parent.
   */
  resize_anchor: AnchorKind;
  resize_style: ResizeStyle;
  beveled: boolean;
}
