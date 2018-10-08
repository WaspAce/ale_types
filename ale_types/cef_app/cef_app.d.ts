declare class CefApp {
  /**
   * Asynchronously create a new browser window using the window parameters specified by
   * |windowInfo|. All values will be copied internally.
   * @param request_context If is null the global request context will be used.
   */
  static create_browser(
    window_info: WindowInfo,
    client: BrowserClient,
    url: string,
    settings: BrowserSettings,
    request_context?: RequestContext
  );
}