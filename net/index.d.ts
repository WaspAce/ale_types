declare class net {
  /**
   * Number of bytes received by net.
   */
  static readonly bytes_received: number;

  /**
   * Number of bytes sent by net.
   */
  static readonly bytes_sent: number;

  /**
   * Called to resolve domain name to IP address.
   * @event
   */
  static on_resolve:
  /**
   * @return Return IP address or empty string to use defautl implementation.
   */
  (
      domain: string
  ) => string;

  /**
   * Called when |byte_count| was received by net.
   * @event
   */
  static on_incoming_traffic:
  (
      byte_count: number
  ) => void;

  /**
   * Called when |byte_count| was sent by net.
   * @event
   */
  static on_outgoing_traffic:
  (
      byte_count: number
  ) => void;

  /**
   * @returns Returns IP address of given domain.
   */
  static resolve(
    domain: string
  ): string;
}
