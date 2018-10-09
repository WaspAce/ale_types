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

  on_take_focus: 
  /**
   * @param next Will be true if the browser is giving focus to the next component and
   * false if the browser is giving focus to the previous component.
   */
  (
    browser: Browser,
    next: boolean
  ) => void;

  /**
   * Called when the browser component is requesting focus.
   * @event
   */
  on_set_focus:
  /**
   * @param source Indicates where the focus request is originating from.
   * @return Return false to allow the focus to be set or true to cancel setting the focus.
   */
  (
    browser: Browser,
    source: FocusSource
  ) => boolean;

  /**
   * Called when the browser component has received focus.
   * @event
   */
  on_got_focus:
  (
    browser: Browser
  ) => void;
}
