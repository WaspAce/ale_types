declare class CookieVisitor {
    constructor(delegate?: object);

    on_visit:(
        cookie: Cookie,
        count: number,
        total: number
    ) => boolean;
}
