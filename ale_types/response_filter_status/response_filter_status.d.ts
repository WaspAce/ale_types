/**
 * Return values for [[ResponseFilter]].filter().
 */
declare enum ResponseFilterStatus {
  /**
   * Some or all of the pre-filter data was read successfully but more data is
   * needed in order to continue filtering (filtered output is pending).
   */
  RESPONSE_FILTER_NEED_MORE_DATA = 0,

  /**
   * Some or all of the pre-filter data was read successfully and all available
   * filtered output has been written.
   */
  RESPONSE_FILTER_DONE = 1,

  /**
   * An error occurred during filtering.
   */
  RESPONSE_FILTER_ERROR = 2
}
