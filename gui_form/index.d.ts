/**
 * Class representing GUI window.
 */
declare class GuiForm extends GuiControl {
  /**
   * Window state.
   */
  window_state: WindowState

  /**
   * Close the window.
   */
  close(): void;

  /**
   * Called when window is closed.
   * @event
   */
  on_close: () => void;

  /**
   * Called when window is about to close.
   * @event
   */
  on_close_query:
  /**
   * @return Return true to allow window close.
   */
  () => boolean;
}
