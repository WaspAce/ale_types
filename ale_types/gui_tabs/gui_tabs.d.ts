declare class GuiTabs extends GuiControl {
  /**
   * Tab count.
   */
  readonly count: number;

  /**
   * If true close buttons 
   */
  show_x_buttons: TabShowClosePolicy;
  active_tab_index: number;

  add_tab(
    index: number,
    caption: string
  ): void;

  delete_tab(
    index: number,
    allow_event: boolean,
    with_cancel_btn: boolean
  ): void;

  set_tab_caption(
    index: number,
    caption: string
  ): void;

  on_tab_close:
  (
    tab_index,
    can_close,
    can_continue
  ) => {
    can_close: boolean,
    can_continue: boolean
  };

  on_tab_move: functon(idx_from, idx_to)
  on_tab_click
  on_tab_plus_click
}
