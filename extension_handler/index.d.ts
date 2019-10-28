/**
* @param result will be the error code.
*/
declare type ExtensionHandlerOnExtensionLoadFailed = (
   result: CefErrorCode
) => void;

/**
 * @param extension The loaded extension.
 */
declare type ExtensionHandlerOnExtensionLoaded = (
  extension: Extension
) => void;

declare type ExtensionHandlerOnExtensionUnloaded = (
  extension: Extension
) => void;

/**
* To allow creation of the browser optionally modify |settings| and return BrowserClient.
* To cancel creation of the browser (and consequently cancel load of the background script)
* return null. Successful creation will be indicated by a call to LifeSpanhandler.on_after_created,
* and BrowserHost.is_background_host will be **true** for the resulting browser.
* See https://developer.chrome.com/extensions/event_pages for more information about extension background script usage.
* 
* @param extension The extension that is loading the background script.
* @param url An internally generated reference to an HTML page that will be used
* to load the background script via a `<script>` src attribute.
*/
declare type ExtensionHandlerOnBeforeBackgroundBrowser = (
  extension: Extension,
  url: string,
  settings: BrowserSettings
) => BrowserClient;

/**
* |extension| and |browser| are the source of the API call.
* @param active_browser May optionally be specified via the windowId property or
* returned via the get_active_browser() callback and provides the default
* BrowserClient and |settings| values for the new browser.
* @param index The position value optionally specified via the index property.
* @param url The URL that will be loaded in the browser.
* @param active true if the new browser should be active when opened.
* To allow creation of the browser optionally modify |windowInfo| and |settings| and
* return BrowserClient. To cancel creation of the browser return null. Successful creation will be
* indicated by a call to LifeSpanHandler.on_after_created.
*/
declare type ExtensionHandlerOnBeforeBrowser = (
  extension: Extension,
  browser: Browser,
  active_browser: Browser,
  index: number,
  url: string,
  active: boolean,
  window_info: WindowInfo,
  settings: BrowserSettings
) => BrowserClient;

/**
* |extension| and |browser| are the source of the API call.
* @return The browser that will be acted on by the API call or return null to act on |browser|.
* The returned browser must share the same RequestContext as |browser|. Incognito browsers should not
* be considered unless the source extension has incognito access enabled, in
* which case |include_incognito| will be true.
*/
declare type ExtensionHandlerOnGetActiveBrowser = 
(
  extension: Extension,
  browser: Browser,
  include_incognito: boolean
) => Browser;

/**
* |extension| and |browser| are the source of the API call.
* @return true to allow access of false to deny access.
* Access to incognito browsers should not be allowed unless the source extension
* has incognito access enabled, in which case |include_incognito| will be true.
*/
declare type ExtensionHandlerOnCanAccessBrowser = (
  extension: Extension,
  browser: Browser,
  include_incognito: boolean,
  target_browser: Browser
) => boolean;

/**
* |extension| and |browser| are the source of the resource request.
* @param file The requested relative file path.
* @returns true to handle the resource request and execute |callback| either synchronously
* or asynchronously. For the default behavior which reads the resource from the extension directory
* on disk return false. Localization substitutions will not be applied to
* resources handled via this function.
*/
declare type ExtensionHandlerOnGetExtensionResource = (
  extension: Extension,
  browser: Browser,
  file: string,
  callback: GetExtensionResourceCallback
) => boolean;

/**
 * Callback class used for asynchronous continuation of
 * ExtensionHandler.get_extension_resource().
 */
declare class ExtensionHandler {
  /**
   * 
   * @param delegate 
   */
  constructor(
    delegate?: object
  );

  /**
   * Called if the cef_request_tContext::LoadExtension request fails.
   * @event
   */
  on_extension_load_failed: ExtensionHandlerOnExtensionLoadFailed;

  /**
   * Called if the RequestContext.load_extension() request succeeds.
   * @event
   */
  on_extension_loaded: ExtensionHandlerOnExtensionLoaded;

  /**
   * Called after the Extension.unload() request has completed.
   * @event
   */
  on_extension_unloaded: ExtensionHandlerOnExtensionUnloaded;

  /**
   * Called when an extension needs a browser to host a background script
   * specified via the "background" manifest key. The browser will have no
   * visible window and cannot be displayed.
   * @event
   */
  on_before_background_browser: ExtensionHandlerOnBeforeBackgroundBrowser;

  /**
   * Called when an extension API (e.g. chrome.tabs.create) requests creation of
   * a new browser.
   * @event
   */
  on_before_browser: ExtensionHandlerOnBeforeBrowser;

  /**
   * Called when no tabId is specified to an extension API call that accepts a
   * tabId parameter (e.g. chrome.tabs.*).
   * @event
   */
  on_get_active_browser: ExtensionHandlerOnGetActiveBrowser;

  /**
   * Called when the tabId associated with |target_browser| is specified to an
   * extension API call that accepts a tabId parameter (e.g. chrome.tabs.*).
   * @event
   */
  on_can_access_browser: ExtensionHandlerOnCanAccessBrowser;

  /**
   * Called to retrieve an extension resource that would normally be loaded from
   * disk (e.g. if a file parameter is specified to chrome.tabs.executeScript).
   * @event
   */
  on_get_extension_resource: ExtensionHandlerOnGetExtensionResource;
}
