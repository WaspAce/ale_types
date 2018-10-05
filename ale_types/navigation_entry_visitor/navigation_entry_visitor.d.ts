declare class NavigationEntryVisitor {
    constructor(
        delegate?: object
    )

    on_visit:(
        entry: NavigationEntry,
        current: boolean,
        index: number,
        total: number
    ) => boolean;
}
