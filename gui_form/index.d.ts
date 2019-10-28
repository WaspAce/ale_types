declare type GuiFormOnClose = () => void;

/**
* @return Return true to allow window close.
*/
declare type GuiFormOnCloseQuery = () => boolean;

declare type GuiFormOnWindowStateChange = (
  window_state: WindowState
) => void;

declare type GuiFormOnShow = () => void;

declare type GuiFormOnHide = () => void;

declare type GuiFormOnPaint = () => void;

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
  on_close: GuiFormOnClose;

  /**
   * Called when window is about to close.
   * @event
   */
  on_close_query: GuiFormOnCloseQuery;

  /**
   * Called when window_state is changed.
   * @event
   */
  on_window_state_change: GuiFormOnWindowStateChange;

  /**
   * Called when show.
   * @event
   */
  on_show: GuiFormOnShow;

  /**
   * Called when hide.
   * @event
   */
  on_hide: GuiFormOnHide;

  /**
   * Called when form needs to be repainted.
   * @event
   */
  on_paint: GuiFormOnPaint;
}
