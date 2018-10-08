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
  on_execute_command: 
  (
    menu_model: MenuModel,
    command_id: MenuId,
    event_flags: EventFlags
  ) => void;

  /**
   * Called when the user moves the mouse outside the menu and over the owning
   * window.
   * @event
   */
  on_mouse_outside_menu:
  (
    menu_model,
    screen_point
  ) => void;

  /**
   * Called on unhandled open submenu keyboard commands.
   * @event
   */
  on_unhandled_open_submenu:
  /**
   * @param is_rtl Will be true if the menu is displaying a right-to-left language.
   */
  (
    menu_model: MenuModel,
    is_rtl: boolean
  ) => void;

  /**
   * Called on unhandled close submenu keyboard commands.
   * @event
   */
  on_unhandled_close_submenu:
  /**
   * @param is_rtl will be true if the menu is displaying a right-to-left language.
   */
  (
    menu_model,
    is_rtl
  ) => void;

  /**
   * The menu is about to show.
   * @event
   */
  on_menu_will_show:
  (
    menu_model: MenuModel
  ) => void;

  /**
   * The menu has closed.
   * @event
   */
  on_menu_closed:
  (
    menu_model: MenuModel
  ) => void;

  /**
   * Optionally modify a menu item label.
   * @event
   */
  on_format_label:
  /**
   * @return Return true if |label| was modified.
   */
  (
    menu_model: MenuModel,
    label: string
  ) => void;
}