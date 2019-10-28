declare interface ResourceHandlerOnOpenResult {
  handle_request: boolean;
  immediately: boolean;
}

declare interface ResourceHandlerOnGetResponseHeadersResult {
  response_length: number;
  redirect_url: string;
}

declare interface ResourceHandlerOnSkipResult {
  bytes_skipped: number;
  immediately: boolean;
}

declare interface ResourceHandlerOnReadResult {
  data_out: number[];
  bytes_read: number;
  immediately: boolean;
}

/**
* @return To handle the request immediately set
* |handle_request| to true (1) and |immediately| to true (1).
* To decide at a later time set |handle_request| to false (0), |immediately| to true (1),
* and execute |callback| to continue or cancel the request.
* To cancel the request immediately set |handle_request| to true (1) and |immediately| to false (0).
*/
declare type ResourceHandlerOnOpen = (
  request: Request,
  callback: Callback
) => ResourceHandlerOnOpenResult;

/**
* If the response length is not known set |response_length| to -1 and on_read_response()
* will be called until it returns false . If the response length is known set |response_length| to
* a positive value and on_read_response() will be called until it returns false or the specified
* number of bytes have been read.
* @param response Use the |response| object to set the mime type, http status code and other
* optional header values. If an error occured while setting up the request you can call set_error()
* on |response| to indicate the error condition.
* @param redirect_url To redirect the request to a new URL set |redirect_url| to the new
* URL. |redirect_url| can be either a relative or fully qualified URL. It is
* also possible to set |response| to a redirect http status code and pass the
* new URL via a Location header. Likewise with |redirect_url| it is valid to
* set a relative or fully qualified URL as the Location header value. If an
* error occured while setting up the request you can call set_error() on
* |response| to indicate the error condition.
*/
declare type ResourceHandlerOnGetResponseHeaders = (
  response: Response
) => ResourceHandlerOnGetResponseHeadersResult;

/**
* Skip over and discard |bytes_to_skip| bytes of response data.
* If data is available immediately set |bytes_skipped| to the number of bytes skipped
* and |immediately| to true (1). To read the data at a later time set |bytes_skipped| to 0,
* |immediately| to true (1) and execute |callback| when the data is available. To indicate failure set
* |bytes_skipped| to < 0 (e.g. -2 for ERR_FAILED) and |immediately| to false (0).
*/
declare type ResourceHandlerOnSkip = (
  bytes_to_skip: number,
  callback: ResourceSkipCallback
) => ResourceHandlerOnSkipResult;

/**
* If data is available immediately copy up to
* |bytes_to_read| bytes into |data_out|, set |bytes_read| to the number of
* bytes copied, and set |immediately| to true (1).
* To read the data at a later time keep a reference to |data_out|,
* set |bytes_read| to 0, return true (1) and execute |callback| when the data is available
* (|data_out| will remain valid until the callback is executed).
* To indicate response completion set |bytes_read| to 0 and set |immediately| to false (0).
* To indicate failure set |bytes_read| to < 0 (e.g. -2 for ERR_FAILED) and set |immediately|
* to false (0).
*/
declare type ResourceHandlerOnRead = (
  bytes_to_read: number,
  callback: ResourceReadCallback
) => ResourceHandlerOnReadResult;

declare type ResourceHandlerOnCancel = () => void;

declare class ResourceHandler {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Open the response stream.
   * @event
   */
  on_open: ResourceHandlerOnOpen;

  /**
   * Retrieve response header information.
   * @event
   */
  on_get_response_headers: ResourceHandlerOnGetResponseHeaders;

  /**
   * * Skip response data when requested by a Range header.
   * @event
   */
  on_skip: ResourceHandlerOnSkip;

  /**
   * Read response data.
   * @event
   */
  on_read: ResourceHandlerOnReadResult;

  /**
   * Request processing has been canceled.
   * @event
   */
  on_cancel: ResourceHandlerOnCancel;
}
