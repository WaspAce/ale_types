declare class SetCookieCallback {
    constructor(delegate?: object);

    on_complete:(
        success: boolean
    ) => void;
}
