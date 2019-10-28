/**
* @return Return IP address or empty string to use defautl implementation.
*/
declare type NetOnResolve = (
 domain: string
) => string;

declare type NetOnTraffic = (
  byte_count: number
) => void;

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
  static on_resolve: NetOnResolve;

  /**
   * Called when |byte_count| was received by net.
   * @event
   */
  static on_incoming_traffic: NetOnTraffic;

  /**
   * Called when |byte_count| was sent by net.
   * @event
   */
  static on_outgoing_traffic: NetOnTraffic;

  /**
   * @returns Returns IP address of given domain.
   */
  static resolve(
    domain: string
  ): string;
}
