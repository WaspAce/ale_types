/**
* @param default_prompt_text Value will be specified for prompt dialogs only.
* @return Return false to suppress the message (suppressing messages is
* preferable to immediately executing the callback as this is used to detect
* presumably malicious behavior like spamming alert messages in
* onbeforeunload). Return true if the application will use a custom dialog or
* if the callback has been executed immediately.
* @param callback Custom dialogs may be either modal or modeless. If a custom dialog is used
* the application must execute |callback| once the custom dialog is
* dismissed.
*/
declare type JsDialogHandlerOnJsDialog = 
(
  browser: Browser,
  origin_url: string,
  dialog_type: JsDialogType,
  message_text: string,
  default_prompt_text: string,
  callback: JsDialogCallback
) => boolean;

/**
* @return Return false to use the default dialog implementation. Return true if the
* application will use a custom dialog or if the callback has been executed
* immediately.
* @param callback Custom dialogs may be either modal or modeless. If a custom
* dialog is used the application must execute |callback| once the custom
* dialog is dismissed.
*/
declare type JsDialogHandlerOnBeforeUnloadDialog = (
  browser: Browser,
  message_text: string,
  is_reload: boolean,
  callback: JsDialogCallback
) => void;

declare type JsDialogHandlerOnResetDialogState = (
  browser: Browser
) => void;

/**
 * Class to handle events related to JavaScript dialogs.
 */
declare class JsDialogHandler {
  /**
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Called to run a JavaScript dialog.
   * @event
   */
  on_js_dialog: JsDialogHandlerOnJsDialog;

  /**
   * Called to run a dialog asking the user if they want to leave a page.
   * @event
   */
  on_before_unload_dialog: JsDialogHandlerOnBeforeUnloadDialog;

  /**
   * Called to cancel any pending dialogs and reset any saved dialog state. Will
   * be called due to events like page navigation irregardless of whether any
   * dialogs are currently pending.
   * @event
   */
  on_reset_dialog_state: JsDialogHandlerOnResetDialogState;
}
