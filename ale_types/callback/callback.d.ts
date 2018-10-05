/**
 * Generic callback class used for asynchronous continuation.
 */
declare class Callback {
    /**
     * Continue processing.
     */
    cont(): void;

    /**
     * Cancel processing.
     */
    cancel(): void;
}
