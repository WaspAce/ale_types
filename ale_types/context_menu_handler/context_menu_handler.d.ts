declare class ContextMenuHandler {
  on_before_context_menu: 
  (
    browser: Browser,
    frame: Frame,
    params: ContextMenuParams,
    model: MenuModel
  ) => void;
  
  on_run_context_menu:
  (
    browser: Browser, 
    frame: Frame,
    params: ContextMenuParams,
    model: MenuModel,
    callback: RunContextMenuCallback
  ) => boolean;

  on_context_menu_command:
  (
    browser: Browser,
    frame: Frame,
    params: ContextMenuParams,
    command_id: MenuId,
    event_flags
  ) => boolean;

  on_context_menu_dismissed:
  (
    browser: Browser,
    frame: Frame
  ) => void;
}
