/**
 *  Class to receive string values asynchronously.
 */
declare class StringVisitor {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(delegate?: object);

    /**
     * Method that will be executed.
     * @event
     */
    on_visit:(
        string: string
    ) => void
}
