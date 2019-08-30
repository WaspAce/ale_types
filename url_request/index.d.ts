/**
 * Class used to represent a web request.
 */
declare class UrlRequest {

  /**
   * Create a new URL request that is not associated with a specific browser or
   * frame. Use [[Frame]].create_url_request instead if you want the request to
   * have this association, in which case it may be handled differently (see
   * documentation on that function). Requests may originate from the both browser
   * process and the render process.
   *
   * For requests originating from the browser process:
   *   - It may be intercepted by the client via [[ResourceRequestHandler]] or
   *     [[SchemeHandlerFactory]].
   *   - POST data may only contain only a single element of type PDE_TYPE_FILE
   *     or PDE_TYPE_BYTES.
   *   - If |request_context| is empty the global request context will be used.
   * For requests originating from the render process:
   *   - It cannot be intercepted by the client so only http(s) and blob schemes
   *     are supported.
   *   - POST data may only contain a single element of type PDE_TYPE_BYTES.
   *   - The |request_context| parameter must be NULL.
   *
   * The |request| object will be marked as read-only after calling this function.
   */
  constructor(
    request: Request,
    client: UrlRequestClient,
    request_context: RequestContext
  );

  /**
   * The request object used to create this URL request. The
   * object is read-only and should not be modified.
   */
  readonly request: Request;
  
  /**
   * The client.
   */
  readonly client: UrlRequestClient;

  /**
   * Returns the request status.
   */
  readonly request_status: UrlRequestStatus;

  /**
   * The request error if status is UR_CANCELED or UR_FAILED, or 0
   * otherwise.
   */
  readonly request_error: CefErrorCode;

  /**
   * true (1) if the response body was served from the cache. This
   * includes responses for which revalidation was required.
   */
  readonly response_was_cached: boolean;

  /**
   * @Returns the response, or NULL if no response information is available.
   * Response information will only be available after the upload has completed.
   * The returned object is read-only and should not be modified.
   */
  get_response(): Response;

  /**
   * Cancel the request.
   */
  cancel(): void;
}
