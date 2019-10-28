/**
* Do not keep a reference to |entry| outside of this callback.
* @return true to continue visiting entries or false to
* stop.
* @param current True if this entry is the currently loaded navigation entry.
* @param index The 0-based index of this entry.
* @param total The total number of entries.
*/
declare type NavigationEntryVisitorOnVisit = (
  entry: NavigationEntry,
  current: boolean,
  index: number,
  total: number
) => boolean;

/**
 * Class structure for [[BrowserHost]].get_navigation_entries. The
 * functions of this structure will be called on the browser process UI thread.
 */
declare class NavigationEntryVisitor {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  )

  /**
   * Event that will be called.
   * @event
   */
  on_visit: NavigationEntryVisitorOnVisit; 
}
