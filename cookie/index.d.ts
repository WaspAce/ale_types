/**
 * Cookie information.
 */
declare class Cookie {
    /**
     * The cookie name.
     */
    name: string;

    /**
     * The cookie value.
     */
    value: string;

    /**
     * If **domain** is empty a host cookie will be created instead of a domain
     * cookie. Domain cookies are stored with a leading "." and are visible to
     * sub-domains whereas host cookies are not.
     */
    domain: string;

    /**
     * If **path** is non-empty only URLs at or below the path will get the cookie
     * value.
     */
    path: string;

    /**
     * If **secure** is **true** the cookie will only be sent for HTTPS requests.
     */
    secure: boolean;

    /**
     * If **httponly** is **true** the cookie will only be sent for HTTP requests.
     */
    httponly: boolean;

    /**
     * The cookie creation date. This is automatically populated by the system on
     * cookie creation.
     */
    creation: CefTime;

    /**
     * The cookie last access date. This is automatically populated by the system
     * on access.
     */
    last_access: CefTime;

    /**
     * The cookie expiration date is only valid if **has_expires** is **true**.
     */
    has_expires: boolean;

    /**
     * The cookie expiration date is only valid if **has_expires** is **true**.
     */
    expires: CefTime;

    /**
     * 
     */
    clone(): Cookie;
}
