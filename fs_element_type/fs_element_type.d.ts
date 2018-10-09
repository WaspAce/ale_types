/**
 * File system element type.
 */
declare enum FsElementType {
  /**
   * Path cannot be accessed.
   */
  FET_NONE = 0,

  /**
   * File found for the specified path.
   */
  FET_FILE = 1,

  /**
   * Directory found for the specified path.
   */
  FET_DIRECTORY = 2
}
