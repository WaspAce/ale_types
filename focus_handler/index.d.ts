/**
* @param next Will be true if the browser is giving focus to the next component and
* false if the browser is giving focus to the previous component.
*/
declare type FocusHandlerOnTakeFocus = (
  browser: Browser,
  next: boolean
) => void;

/**
* @param source Indicates where the focus request is originating from.
* @return Return false to allow the focus to be set or true to cancel setting the focus.
*/
declare type FocusHandlerOnSetFocus = (
  browser: Browser,
  source: FocusSource
) => boolean;

declare type FocusHandlerOnGotFocus = (
  browser: Browser
) => void;

/**
 * Class to handle events related to focus.
 */
declare class FocusHandler {

  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Called when the browser component is about to loose focus. For instance, if
   * focus was on the last HTML element and the user pressed the TAB key.
   * @event
   */

  on_take_focus: FocusHandlerOnTakeFocus;

  /**
   * Called when the browser component is requesting focus.
   * @event
   */
  on_set_focus: FocusHandlerOnSetFocus;

  /**
   * Called when the browser component has received focus.
   * @event
   */
  on_got_focus: FocusHandlerOnGotFocus;
}
