/**
 * Supported context menu type flags.
 */
declare enum ContextMenuTypeFlags {
  /**
   * The top page is selected.
   */
  CM_TYPEFLAG_PAGE = 0,

  /**
   * A subframe page is selected.
   */
  CM_TYPEFLAG_FRAME = 1,

  /**
   * A link is selected.
   */
  CM_TYPEFLAG_LINK = 2,

  /**
   * A media node is selected.
   */
  CM_TYPEFLAG_MEDIA = 3,

  /**
   * There is a textual or mixed selection that is selected.
   */
  CM_TYPEFLAG_SELECTION = 4,

  /**
   * An editable element is selected.
   */
  CM_TYPEFLAG_EDITABLE = 5
}
