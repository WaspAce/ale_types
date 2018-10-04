declare class CookieManager {
    constructor(persist_session_cookies: boolean)

    set_supported_schemes(schemes: StringList, callback: CompletionCallback): void;
    visit_all_cookies(visitor: CookieVisitor): boolean;
    visit_url_cookies(url: string, include_http_only: boolean, visitor: CookieVisitor): boolean;
    set_cookie(url: string, cookie: Cookie, callback: SetCookieCallback): boolean;
    delete_cookies(url: string, cookie_name: string, callback: DeleteCookiesCallback): boolean;
    set_persist_session_cookies(persist_session_cookies: boolean): boolean;
}
