/**
 * Focus sources.
 */
declare enum FocusSource {
  /**
   * The source is explicit navigation via the API (LoadURL(), etc).
   */
  FOCUS_SOURCE_NAVIGATION = 0,

  /**
   * The source is a system-generated focus event.
   */
  FOCUS_SOURCE_SYSTEM = 1
}
