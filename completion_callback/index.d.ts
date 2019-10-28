declare type CompletionCallbackOnComplete = () => void;

/**
 * Generic callback class used for asynchronous completion.
 */
declare class CompletionCallback {
    /**
     * 
     * @param delegate Object, on whose behalf (this) events will be triggered.
     */
    constructor(delegate?: object);

    /**
     * Will be called once the task is complete.
     * @event
     */
    on_complete: CompletionCallbackOnComplete;
}
