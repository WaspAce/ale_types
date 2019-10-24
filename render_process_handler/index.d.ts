/**
 * Class used to implement render process callbacks.
 */
declare class RenderProcessHandler {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Handler for browser load status events.
   */
  load_handler: LoadHandler;

  /**
   * 
   */
  v8_extension: V8Extension;


  /**
   * Called after the render process main thread has been created.
   * @event
   */
  on_render_thread_created:
  /**
   * @param extra_info A read-only value originating from [[BrowserProcessHandler]].on_render_process_thread_created().
   * Do not keep a reference to |extra_info| outside of this function.
   */
  (
    extra_info: ListValue
  ) => void;

  /**
   * Called after WebKit has been initialized.
   * @event
   */
  on_web_kit_initialized: ()=> void;

  /**
   * Called after a browser has been created. When browsing cross-origin a new
   * browser will be created before the old browser with the same identifier is
   * destroyed.
   * @event
   */
  on_browser_created:
  /**
   * |extra_info| is a read-only value originating from
   * [[Browser]] or [[LifeSpanHandler]].on_before_popup()
   */
  (
    browser: Browser,
    extra_info: DictionaryValue
  ) => void;

  /**
   * Called before a browser is destroyed.
   * @event
   */
  on_browser_destroyed:
  (
    browser: Browser
  ) => void;

  /**
   * Called immediately after the V8 context for a frame has been created.
   * @event
   */
  on_context_created:
  /**
   * To retrieve the JavaScript 'window' object use the [[V8Context]].get_global() function.
   */
  (
    browser: Browser,
    frame: Frame,
    context: V8Context
  ) => void;

  /**
   * Called immediately before the V8 context for a frame is released.
   * @event
   */
  on_context_released:
  /**
   * No references to the context should be kept after this function is called.
   */
  (
    browser: Browser,
    frame: Frame,
    context: V8Context
  ) => void;

  /**
   * Called when a new message is received from a different process.
   * @event
   */
  on_process_message_received:
  /**
   * Do not keep a reference to or attempt to access the message outside of this callback.
   * @return Return true if the message was handled or false otherwise.
   */
  (
    browser: Browser,
    frame: Frame,
    source_process: ProcessId,
    message: ProcessMessage
  ) => boolean;
}