/**
 * Class used for managing cookies.
 */
declare class CookieManager {
    /**
     * Set the schemes supported by this manager. If |include_defaults| is true
	 * (1) the default schemes ("http", "https", "ws" and "wss") will also be
	 * supported. Calling this function with an NULL |schemes| value and
	 * |include_defaults| set to false (0) will disable all loading and saving of
	 * cookies for this manager. If |callback| is non-NULL it will be executed
	 * asnychronously after the change has been applied. Must be
	 * called before any cookies are accessed.
     */
    set_supported_schemes(
        schemes: StringList,
        include_defaults: boolean,
        callback?: CompletionCallback
    ): void;

    /**
     * Visit all cookies. The returned cookies are ordered by longest path,
     * then by earliest creation date.
     * @returns **false** if cookies cannot be accessed.
     */
    visit_all_cookies(
        visitor: CookieVisitor
    ): boolean;

    /**
     * Visit a subset of cookies. The returned
     * cookies are ordered by longest path, then by earliest creation date.
     * @param url  The results are filtered by the given url scheme, host, domain and path.
     * @param include_http_only If **true** HTTP-only cookies will also be included in the results.
     * @returns **false** if cookies cannot be accessed.
     */
    visit_url_cookies(
        url: string,
        include_http_only: boolean,
        visitor: CookieVisitor
    ): boolean;

    /**
     * Sets a cookie given a valid URL and explicit user-provided cookie
     * attributes. This function expects each attribute to be well-formed. It will
     * check for disallowed characters (e.g. the ';' character is disallowed
     * within the cookie value attribute) and fail without setting the cookie if
     * such characters are found.
     * @param callback If any it will be executed asnychronously on the IO thread after the cookie has been set.
     * @returns **false** if an invalid URL is specified or if cookies cannot be accessed.
     */
    set_cookie(
        url: string,
        cookie: Cookie,
        callback?: SetCookieCallback
    ): boolean;

    /**
     * Delete all cookies that match the specified parameters. If both **url** and
     * **cookie_name** values are specified all host and domain cookies matching
     * both will be deleted. If only **url** is specified all host cookies (but not
     * domain cookies) irrespective of path will be deleted. If **url** is empty all
     * cookies for all hosts and domains will be deleted. Cookies can alternately be deleted using
     * the visit_*_cookies() functions.
     * @param callback If any it will be executed asnychronously after the cookies
     * have been deleted.
     * @returns **false** if a non-empty invalid URL is specified
     * or if cookies cannot be accessed.
     */
    delete_cookies(
        url?: string,
        cookie_name?: string,
        callback?: DeleteCookiesCallback
    ): boolean;
}
