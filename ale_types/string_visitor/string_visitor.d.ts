declare class StringVisitor {
    constructor(delegate?: object);
    on_visit:(
        string: string
    ) => void
}
