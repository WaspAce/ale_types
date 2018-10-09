/**
 * Supported context menu edit state bit flags.
 */
declare enum ContextMenuEditStateFlags {
  CM_EDITFLAG_CAN_UNDO = 0,
  CM_EDITFLAG_CAN_REDO = 1,
  CM_EDITFLAG_CAN_CUT = 2,
  CM_EDITFLAG_CAN_COPY = 3,
  CM_EDITFLAG_CAN_PASTE = 4,
  CM_EDITFLAG_CAN_DELETE = 5,
  CM_EDITFLAG_CAN_SELECT_ALL = 6,
  CM_EDITFLAG_CAN_TRANSLATE = 7
}
