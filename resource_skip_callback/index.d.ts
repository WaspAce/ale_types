/**
 * Callback for asynchronous continuation of [[ResourceHandler]].skip().
 */
declare class ResourceSkipCallback {
  /**
   * Continue processing.
   */
  cont(
    bytes_read: number
  ): void;
}
