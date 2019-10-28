/**
* @param result Will be the result code.
* @param resolved_ips Will be the list of
* resolved IP addresses or undefined if the resolution failed.
*/
declare type ResolveCallbackOnResolveCompleted = (
  result: CefErrorCode,
  resolved_ips?: StringList
) => void;

/**
 * Callback class for [[RequestContext]].resolve_host.
 */
declare class ResolveCallback {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Called asynchronously after the resolve_host request has completed.
   * @event
   */
  on_resolve_completed: ResolveCallbackOnResolveCompleted;
}
