/**
* Do not keep references to |params| or |model| outside of this callback.
* @param params Provides information about the context menu state.
* @param model Initially contains the default context menu.
* Can be cleared to show no context menu or modified to show a custom menu.
*/
declare type ContextMenuHandlerOnBeforeContextMenu = (
  browser: Browser,
  frame: Frame,
  params: ContextMenuParams,
  model: MenuModel
) => void;

/**
* Do not keep references to |params| or |model| outside of this callback.
* @param params Provides information about the context menu state.
* @param model Contains the context menu model resulting from on_before_context_menu.
* @return For custom display return true and execute |callback| either synchronously or asynchronously with the
* selected command ID. For default display return false.
*/
declare type ContextMenuHandlerOnRunContextMenu = (
  browser: Browser, 
  frame: Frame,
  params: ContextMenuParams,
  model: MenuModel,
  callback: RunContextMenuCallback
) => boolean;

/**
* Do not keep a reference to |params| outside of this callback.
* @return Return true if the command was handled or false for the default implementation.
* See [[MenuId]] for the command ids that have default implementations. All
* user-defined command ids should be between MENU_ID_USER_FIRST and
* MENU_ID_USER_LAST.
* @param params Will have the same values as what was passed to
* o_before_context_menu().
*/
declare type ContextMenuHandlerOnContextMenuCommand = (
  browser: Browser,
  frame: Frame,
  params: ContextMenuParams,
  command_id: MenuId,
  event_flags: EventFlags[]
) => boolean;

declare type ContextMenuHandlerOnContextMenuDismissed = (
  browser: Browser,
  frame: Frame
) => void;

/**
 * Class to handle context menu events.
 */
declare class ContextMenuHandler {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
      delegate?: object
  );

  /**
   * Called before a context menu is displayed.
   * @event
   */
  on_before_context_menu: ContextMenuHandlerOnBeforeContextMenu;
  
  /**
   * Called to allow custom display of the context menu.
   * @event
   */
  on_run_context_menu: ContextMenuHandlerOnRunContextMenu;

  /**
   * Called to execute a command selected from the context menu.
   * @event
   */
  on_context_menu_command: ContextMenuHandlerOnContextMenuCommand;

  /**
   * Called when the context menu is dismissed irregardless of whether the menu
   * was null or a command was selected.
   * @event
   */
  on_context_menu_dismissed: ContextMenuHandlerOnContextMenuDismissed;
}
