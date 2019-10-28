/**
* @param show The popup should be shown if |show| is true and hidden if |show| is false.
*/
declare type RenderHandlerOnPopupShow = (
  browser: Browser,
  show: boolean
) => void;

/**
* @param rect Contains the new location and size in view coordinates.
*/
declare type RenderHandlerOnPopupSize = (
 browser: Browser,
 rect: Rect
) => void;

/**
* @param images Contains repainted images of |browser| view.
*/
declare type RenderHandlerOnPaint = (
  browser: Browser,
  images: Image[]
) => void;

declare type RenderHandlerOnScrollOffsetChanged = (
  browser: Browser,
  x: number,
  y: number
) => void;

/**
* @param selected_range The range of characters that have been selected.
* @param character_bounds The bounds of each character in view coordinates.
*/
declare type RenderHandlerOnImeCompositionRangeChanged = (
  browser: Browser,
  selected_range: Range,
  character_bounds: Range[]
) => void;

/**
* @return Return true if the screen coordinates were provided.
*/
declare type RenderHandlerOnGetScreenPoint = (
  browser: Browser,
  view_point: Point,
  screen_point: Point
) => boolean;

declare type RenderHandlerOnVirtualKeyboardRequested = (
  browser: Browser,
  input_mode: TextInputMode
) => void;

/**
 * Class to handle render events.
 */
declare class RenderHandler {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * The root window rectangle in screen coordinates.
   */
  root_screen_rect: Rect;

  /**
   * The view rectangle which is relative to screen
   * coordinates.
   */
  view_rect: Rect;

  /**
   * The client to fill in the [[ScreenInfo]] object with
   * appropriate values.
   */
  screen_info: ScreenInfo;

  /**
   * Called when the browser wants to show or hide the popup widget.
   * @event
   */
  on_popup_show: RenderHandlerOnPopupShow;

  /**
   * Called when the browser wants to move or resize the popup widget.
   * @event
   */
  on_popup_size: RenderHandlerOnPopupSize;

  /**
   * Called when an elements of |browser| should be painted.
   * @event
   */
  on_paint: RenderHandlerOnPaint;

  /**
   * TODO
   */
  on_cursor_change:() => void;

  /**
   * Called when the scroll offset has changed.
   * @event
   */
  on_scroll_offset_changed: RenderHandlerOnScrollOffsetChanged;

  /**
   * Called when the IME composition range has changed.
   * @event
   */
  on_ime_composition_range_changed: RenderHandlerOnImeCompositionRangeChanged;

  /**
   * Called to retrieve the translation from view coordinates to actual screen
   * coordinates.
   */
  on_get_screen_point: RenderHandlerOnGetScreenPoint;

  /**
   * Called when an on-screen keyboard should be shown or hidden for the
   * specified |browser|. |input_mode| specifies what kind of keyboard should be
   * opened. If |input_mode| is [[TextInputMode]].CEF_TEXT_INPUT_MODE_NONE, any existing keyboard
   * for this browser should be hidden.
   */
  on_virtual_keyboard_requested: RenderHandlerOnVirtualKeyboardRequested;

  /**
   * Add direct targets to draw images on.
   */
  add_draw_targets(
    targets: GuiPanel[] | Image[]
  )
}
