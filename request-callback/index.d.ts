/**
 * Callback class used for asynchronous continuation of url requests.
 */
declare class RequestCallback {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
      delegate?: object
  );

  /**
   * Continue the url request. If |allow| is true (1) the request will be
   * continued. Otherwise, the request will be canceled.
   */
  cont(
    allow: boolean
  ): void;

   /**
   * Cancel the url request.
   */
  cancel();
}
