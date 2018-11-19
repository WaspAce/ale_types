declare class ResourceHandler {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Begin processing the request.
   * @event
   */
  on_process_request:
  /**
   * @return To handle the request return true and call [[Callback]].cont()
   * once the response header information is available ([[Callback]].cont()
   * can also be called from inside this function if header information is available immediately).
   * To cancel the request return false.
   */
  (
    request: Request,
    callback: Callback
  ) => boolean;

  /**
   * Retrieve response header information.
   * @event
   */
  on_get_response_headers:
  /**
   * If the response length is not known set |response_length| to -1 and on_read_response()
   * will be called until it returns false . If the response length is known set |response_length| to
   * a positive value and on_read_response() will be called until it returns false or the specified
   * number of bytes have been read.
   * @param response Use the |response| object to set the mime type, http status code and other
   * optional header values. If an error occured while setting up the request you can call set_error()
   * on |response| to indicate the error condition.
   * @param redirect_url To redirect the request to a new URL set |redirect_url| to the new
   * URL.
   */
  (
    response: Response
  ) => {
    response_length: number,
    redirect_url: string
  };

  /**
   * Read response data.
   * @event
   */
  on_read_response:
  /**
   * If data is available immediately copy up to |bytes_to_read| bytes
   * into |data_out|, set |bytes_read| to the number of bytes copied,
   * and return true. To read the data at a later time set
   * |bytes_read| to 0, return true and call [[Callback]].cont() when the
   * data is available. To indicate response completion return false.
   */
  (
    bytes_to_read: number,
    callback: Callback
  ) => {
    data_out: number[],
    bytes_read: number,
    result: boolean
  };

  /**
   * 
   * @event
   */
  on_can_get_cookie:
  /**
   * Return true if the specified cookie can be sent with the request or
   * false otherwise. If false is returned for any cookie then no
   * cookies will be sent with the request.
   */
  (
    cookie: Cookie
  ) => void;

  /**
   * @event
   */
  on_can_set_cookie: 
  /**
   * Return true if the specified cookie returned with the response can be
   * set or false otherwise.
   */
  (
    cookie: Cookie
  ) => void;

  /**
   * Request processing has been canceled.
   * @event
   */
  on_cancel: () => void;
}
