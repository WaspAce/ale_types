declare class DeleteCookiesCallback {
    constructor(delegate?: object);

    on_complete:(
        num_deleted: number
    ) => void
}
