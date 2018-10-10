/**
 * 
 */
declare class CookieVisitor {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(
        delegate?: object
    );

    /**
     * Will be called once for each cookie. This event may never be
     * called if no cookies are found.
     * @event
     */
    on_visit:
    /**
     * @param cookie Do not use cookie outside this callback.
     * @param count The 0-based index for the current cookie.
     * @param total The total number of cookies.
     * @return **true** to delete the cookie currently being visited.
     */
    (
        cookie: Cookie,
        count: number,
        total: number
    ) => boolean;
}
