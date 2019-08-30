/**
 * Class used to represent a web request.
 */
declare class Request {
  /**
   * **true** if this object is read-only.
   */
  readonly is_read_only: boolean;

  /**
   * The fully qualified URL.
   */
  url: string;

  /**
   * The request function type. The value will default to POST if post data
   * is provided and GET otherwise.
   */
  method: string;

  /**
   * The referrer URL.
   */
  readonly referrer_url: string;

  /**
   * The referrer policy.
   */
  readonly referrer_policy: ReferrerPolicy;

  /**
   * The flags used in combination with UrlRequest.
   */
  flags: UrlRequestFlags[];

  /**
   * The URL to the first party for cookies used in combination with
   * UrlRequest.
   */
  first_party_for_cookies: string;

  /**
   * The resource type for this request.
   */
  resource_type: ResourceType;

  /**
   * The transition type for this request. Only applies to requests that
   * represent a main frame or sub-frame navigation.
   */
  transition_type: TransitionType;

  /**
   * The globally unique identifier for this request or 0 if not
   * specified. Can be used by [[ResourceRequestHandler]] implementations to track a
   * single request across multiple callbacks.
   */
  identifier: number;

  /**
   * Set the referrer URL and policy. If non-empty the referrer URL must be fully
   * qualified with an HTTP or HTTPS scheme component. Any username, password or
   * ref component will be removed.
   */
  set_referrer(referrer_url: string, policy: ReferrerPolicy): void;

  /**
   * Get the header values. Will not include the Referer value if any.
   */
  get_header_map(
    header_map: StringMultimap
  ): void;

  /**
   * Set the header values. If a Referer value exists in the header map it will
   * be removed and ignored.
   */
  set_header_map(
    header_map: StringMultimap
  ): void;

  /**
   * Returns the first header value for |name| or an NULL string if not found.
   * Will not return the Referer value if any. Use get_header_map instead if
   * |name| might have multiple values.
   */
  get_header_by_name(
    name: string
  ): string;

  /**
   * Set the header |name| to |value|. If |overwrite| is true (1) any existing
   * values will be replaced with the new value. If |overwrite| is false (0) any
   * existing values will not be overwritten. The Referer value cannot be set
   * using this function.
   */
  set_header_by_name(
    name_: string,
    value: string,
    overwrite: boolean
  ): void;

  /**
   * Get the post data.
   */
  get_post_data(): PostData;

  /**
   * Set the post data.
   */
  set_post_data(): PostData;
}
