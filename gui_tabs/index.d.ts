declare interface GuiTabsOnTabCloseResult {
  can_close: boolean;
  can_continue: boolean;
}

declare type GuiTabsOnTabClose = (
  tab_index,
  can_close,
  can_continue
) => GuiTabsOnTabCloseResult;

declare type GuiTabsOnTabMove = (
  idx_from: number,
  idx_to: number
) => void;

declare type GuiTabsOnTabClick = () => void;

declare type GuiTabsOnTabPlusClick = () => void;

declare class GuiTabs extends GuiControl {
  /**
   * Tab count.
   */
  readonly count: number;
  show_x_buttons: TabShowClosePolicy;
  active_tab_index: number;

  /**
   * @param parent The parent control which will contain this control.
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    parent: GuiControl,
    delegate?: object
  );

  /**
   * Adds new tab.
   * @param index Index of tab or -1 to append to end.
   * @param caption Caption of new tab.
   */
  add_tab(
    index: number,
    caption: string
  ): void;

  /**
   * Deletes tab by specified index.
   * @param allow_event Allows to call on_tab_close after this.
   * @param with_cancel_ntn Specifies what value will be passed to on_tab_close parameter
   * can_continue (if you delete only one tab, pass false, if you're in a loop which deletes many tabs at once, pass true).
   */
  delete_tab(
    index: number,
    allow_event: boolean,
    with_cancel_btn: boolean
  ): void;

  set_tab_caption(
    index: number,
    caption: string
  ): void;

  /**
   * Called when "x" mark clicked.
   */
  on_tab_close: GuiTabsOnTabClose;

  /**
   * Called after adding/deleting/moving tabs. Passed 2 indexes:
   * @param idx_from Will be -1 if tab added.
   * @param idx_to Will be -1 if tab deleted.
   */
  on_tab_move: GuiTabsOnTabMove;

  /**
   * Called when tab activates (by click or code).
   */
  on_tab_click: GuiTabsOnTabClick;

  /**
   * Called when "plus" pseudo-tab or "plus" button clicked.
   */
  on_tab_plus_click: GuiTabsOnTabPlusClick;
}
