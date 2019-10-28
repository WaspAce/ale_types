/**
 * @param num_deleted Will be the number of cookies that were deleted or -1 if unknown.
 */
declare type DeleteCookiesCallbackOnComplete = (
  num_deleted: number
) => void;

/**
 * Class to implement to be notified of asynchronous completion via
 * CookieManager.delete_cookies().
 */
declare class DeleteCookiesCallback {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(delegate?: object);

  /**
   * Event that will be called upon completion.
   * @event
   */
  on_complete: DeleteCookiesCallbackOnComplete;
}
