/**
* @param identifer is the identifier passed to **find()**
* @param count is the number of matches currently identified
* @param selection_rect is the location of where the match was found (in window coordinates)
* @param active_match_ordinal is the current position in the search results
* @param final_update is **true** if this is the last find notification.
*/
declare type FindHandlerOnFindResult = (
  browser: Browser,
  identifier: number,
  count: number,
  selection_rect: Rect,
  active_match_ordinal: number,
  final_update: boolean
) => void;

/**
 * Class to handle events related to find results.
 */
declare class FindHandler {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Called to report find results returned by **BrowserHost.find()**.
   * @event
   */
  on_find_result: FindHandlerOnFindResult;
}


