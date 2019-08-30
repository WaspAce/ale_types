declare class Browser {
  /**
   * Synchronously create a new browser window using the window parameters specified by
   * **windowInfo**. If **request_context** is not defined the global request context will be
   * used.
   */
  constructor(
    window_info: WindowInfo,
    client: BrowserClient,
    url: string,
    settings: BrowserSettings,
    request_context?: RequestContext
  )

  /**
   * **true** if the browser can navigate backwards.
   */
  readonly can_go_back: boolean;

  /**
   * **true** if the browser can navigate forwards.
   */
  readonly can_go_forward: boolean;

  /**
   * **true** if the browser is currently loading.
   */
  readonly is_loading: boolean;

  /**
   * **true** if the window is a popup window.
   */
  readonly is_popup: boolean;

  /**
   * **true** (1) if a document has been loaded in the browser.
   */
  readonly has_document: boolean;

  /**
   * The globally unique identifier for this browser. This value is also
   * used as the tabId for extension APIs.
   */
  readonly identifier: number;

  /**
   * The number of frames that currently exist.
   */
  readonly frame_count: number;

  /**
   * @returns the browser host object.
   */
  get_host(): BrowserHost;

  /**
   * Navigate backwards.
   */
  go_back(): void;

  /**
   * Navigate forwards.
   */
  go_forward(): void;

  /**
   * Reload the current page.
   */
  reload(): void;

  /**
   * Reload the current page ignoring any cached data.
   */
  reload_ignore_cache(): void;

  /**
   * Stop loading the page.
   */
  stop_load(): void;

  /**
   * @returns **true** if this object is pointing to the same handle as **that**
   * object.
   */
  is_same(that: Browser): boolean;

  /**
   * @returns the frame with the specified identifier, or null if not found.
   */
  get_frame_by_identifier(identifier: number): Frame | null;

  /**
   * @returns the frame with the specified name, or null if not found.
   */
  get_frame(name: string): Frame | null;

  /**
   * @returns the identifiers of all existing frames.
   */
  get_frame_identifiers(): number[];

  /**
   * Returns the names of all existing frames into **names**.
   */
  get_frame_names(names: StringList): void;

  /**
   * @returns Returns the main (top-level) frame for the browser window.
   */
  get_main_frame(): Frame;

  /**
   * @returns Returns the focused frame for the browser window.
   */
  get_focused_frame(): Frame;
}
