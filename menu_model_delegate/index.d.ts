declare type MenuModelDelegateOnExecuteCommand = (
  menu_model: MenuModel,
  command_id: MenuId,
  event_flags: EventFlags
) => void;

declare type MenuModelDelegateOnMouseOutsideMenu = (
  menu_model,
  screen_point
) => void;

/**
* @param is_rtl Will be true if the menu is displaying a right-to-left language.
*/
declare type MenuModelDelegateOnUnhandledOpenSubmenu = (
  menu_model: MenuModel,
  is_rtl: boolean
) => void;

/**
* @param is_rtl will be true if the menu is displaying a right-to-left language.
*/
declare type MenuModelDelegateOnUnhandledCloseSubmenu = (
 menu_model,
 is_rtl
) => void;

declare type MenuModelDelegateOnMenuWillShow = (
  menu_model: MenuModel
) => void;

declare type MenuModelDelegateOnMenuClosed = (
  menu_model: MenuModel
) => void;

/**
* @return Return true if |label| was modified.
*/
declare type MenuModelDelegateOnFormatLabel = (
  menu_model: MenuModel,
  label: string
) => void;

/**
 * Class to handle menu model events.
 */
declare class MenuModelDelegate {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Perform the action associated with the specified |command_id| and optional
   * |event_flags|.
   * @event
   */
  on_execute_command: MenuModelDelegateOnExecuteCommand;

  /**
   * Called when the user moves the mouse outside the menu and over the owning
   * window.
   * @event
   */
  on_mouse_outside_menu: MenuModelDelegateOnMouseOutsideMenu;

  /**
   * Called on unhandled open submenu keyboard commands.
   * @event
   */
  on_unhandled_open_submenu: MenuModelDelegateOnUnhandledOpenSubmenu;

  /**
   * Called on unhandled close submenu keyboard commands.
   * @event
   */
  on_unhandled_close_submenu: MenuModelDelegateOnUnhandledCloseSubmenu;

  /**
   * The menu is about to show.
   * @event
   */
  on_menu_will_show: MenuModelDelegateOnMenuWillShow;

  /**
   * The menu has closed.
   * @event
   */
  on_menu_closed: MenuModelDelegateOnMenuClosed;

  /**
   * Optionally modify a menu item label.
   * @event
   */
  on_format_label: MenuModelDelegateOnFormatLabel;
}