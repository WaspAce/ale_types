declare type DisplayHandlerOnAddressChange = (
  browser: Browser,
  frame: Frame,
  url: string
) => void;

declare type DisplayHandlerOnTitleChange = (
  browser: Browser,
  title: string
) => void;

declare type DisplayHandlerOnFaviconUrlChange = (
  browser: Browser,
  icon_urls: StringList
) => void;

declare type DisplayHandlerOnFullscreenModeChange = (
  browser: Browser,
  fullscreen: boolean
) => void;

declare type DisplayHandlerOnTooltip = (
  browser: Browser,
  text: string
) => void;

declare type DisplayHandlerOnStatusMessage = (
  browser: Browser,
  value: string
) => void;

declare type DisplayHandlerOnConsoleMessage = (
  browser: Browser,
  level: LogSeverity,
  message: string,
  source: string,
  line: number
) => void;

declare type DisplayHandlerOnAutoResize = (
  browser: Browser,
  new_size: Size,
) => boolean;

declare type DisplayHandlerOnLoadingProgressChange = (
  browser: Browser,
  progress: number
) => void;

/**
 * Class to handle events related to browser display state.
 */
declare class DisplayHandler {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Called when a frame's address has changed.
   * @event
   */
  on_address_change: DisplayHandlerOnAddressChange;

  /**
   * Called when the page title changes.
   * @event
   */
  on_title_change: DisplayHandlerOnTitleChange;

  /**
   * Called when the page icon changes.
   * @event
   */
  on_favicon_url_change: DisplayHandlerOnFaviconUrlChange;

  /**
   * Called when web content in the page has toggled fullscreen mode. If
   * **fullscreen** is **true** the content will automatically be sized to fill
   * the browser content area. If **fullscreen** is **false** the content will
   * automatically return to its original size and position. The client is
   * responsible for resizing the browser if desired.
   * @event
   */
  on_fullscreen_mode_change: DisplayHandlerOnFullscreenModeChange;

  /**
   * Called when the browser is about to display a tooltip. **text** contains the
   * text that will be displayed in the tooltip.
   * @event
   */
  on_tooltip: DisplayHandlerOnTooltip;

  /**
   * Called when the browser receives a status message. **value** contains the
   * text that will be displayed in the status message.
   * @event
   */    
  on_status_message: DisplayHandlerOnStatusMessage;

  /**
   * Called to display a console message.
   * @event
   */
  on_console_message: DisplayHandlerOnConsoleMessage;

  /**
   * Called when auto-resize is enabled via
   * **BrowserHost.auto_resize_enabled** and the contents have auto-
   * resized. **new_size** will be the desired size in view coordinates.
   * @event
   */
  on_auto_resize: DisplayHandlerOnAutoResize;

  /**
   * Called when the overall page loading progress has changed. **progress**
   * ranges from 0.0 to 1.0.
   * @event
   */
  on_loading_progress_change: DisplayHandlerOnLoadingProgressChange;
}
