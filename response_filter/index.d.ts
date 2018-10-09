/**
 * Class to filter resource response content.
 */
declare class ResponseFilter {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Initialize the response filter. Will only be called a single time.
   * The filter will not be installed if this function returns false.
   * @event
   */
  on_init_filter: () => boolean;

  /**
   * @event
   */
  on_filter:
  (
    //TODO
  ) => ResponseFilterStatus
}
