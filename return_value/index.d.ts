/**
 * Return value types.
 */
declare enum ReturnValue {
  /**
   * Cancel immediately.
   */
  RV_CANCEL = 0,

  /**
   * Continue immediately.
   */
  RV_CONTINUE = 1,

  /**
   * Continue asynchronously (usually via a callback).
   */
  RV_CONTINUE_ASYNC = 2
}
