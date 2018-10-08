declare class GuiEdit extends GuiControl {
  /**
   * @param parent The parent control which will contain this control.
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    parent: GuiControl,
    delegate?: object
  );

  /**
   * Occurs when the text for the edit control may have changed.
   * @event
   */
  on_change: () => void;

  /**
   * Occurs when a user presses any key while the control has focus.
   * @event
   */
  on_key_down:
  /**
   * @param key_code Key code of the pressed key.
   */
  (
    key_code: number
  ) => void;
}
