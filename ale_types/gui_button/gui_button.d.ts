/**
 * Class representing GUI button.
 */
declare class GuiButton extends GuiControl {
  /**
   * @param parent The parent control which will contain this control.
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
      parent: GuiControl,
      delegate?: object
  );
}
