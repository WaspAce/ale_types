declare class FindHandler {
    constructor(delegate?: object);

    on_find_result:(
        browser: Browser,
        identifier: number,
        count: number,
        selection_rect: Rect,
        active_match_ordinal: number,
        final_update: boolean
    ) => void;
}


