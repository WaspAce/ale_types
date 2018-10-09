/**
 * Supported context menu media types.
 */
declare enum ContextMenuMediaType {
  /**
   * No special node is in context.
   */
  CM_MEDIATYPE_NONE = 0,

  /**
   * An image node is selected.
   */
  CM_MEDIATYPE_IMAGE = 1,

  /**
   * A video node is selected.
   */
  CM_MEDIATYPE_VIDEO = 2,

  /**
   * An audio node is selected.
   */
  CM_MEDIATYPE_AUDIO = 3,

  /**
   * A file node is selected.
   */
  CM_MEDIATYPE_FILE = 4,

  /**
   * A plugin node is selected.
   */
  CM_MEDIATYPE_PLUGIN = 5
}
