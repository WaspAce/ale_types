/**
 * Callback for asynchronous continuation of [[ResourceHandler]].read().
 */
declare class ResourceReadCallback {
  /**
   * Continue processing.
   */
  cont(
    bytes_read: number
  ): void;
}
