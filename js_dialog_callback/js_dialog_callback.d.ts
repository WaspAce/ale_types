/**
 * Callback class used for asynchronous continuation of JavaScript dialog
 * requests.
 */
declare class JsDialogCallback {
    /**
     * Continue the JS dialog request.
     * @param success Set to true if the OK button was pressed.
     * @param user_input The value should be specified for prompt dialogs.
     */
    cont(
        success: boolean,
        user_input: string
    ): void;
}
