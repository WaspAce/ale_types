/**
* @param success Will be **true** if the cookie was set successfully.
*/
declare type SetCookieCallbackOnComplete = (
  success: boolean
) => void;

/**
 * Class to implement to be notified of asynchronous completion via
 * CookieManager_t.set_cookie().
 */
declare class SetCookieCallback {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Event that will be called upon completion.
   * @event
   */
  on_complete: SetCookieCallbackOnComplete;
}
