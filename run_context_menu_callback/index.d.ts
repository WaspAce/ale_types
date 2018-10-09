/**
 * Callback class used for continuation of custom context menu display.
 */
declare class RunContextMenuCallback {
  /**
   * Complete context menu display by selecting the specified |command_id| and |event_flags|.
   */
  cont(
    command_id: number,
    event_flags: EventFlags
  )

  /**
   * Cancel context menu display.
   */
  cancel();
}
