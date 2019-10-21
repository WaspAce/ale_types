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

  /**
   * Called when window_state is changed.
   * @event
   */
  on_window_state_change:
  (
    window_state: WindowState
  ) => void;

  /**
   * Called when show.
   * @event
   */
  on_show:() => void;

  /**
   * Called when hide.
   * @event
   */
  on_hide: () => void;

  /**
   * Called when form needs to be repainted.
   * @event
   */
  on_paint: () => void;
}
