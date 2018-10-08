/**
 * Supported menu IDs. Non-English translations can be provided for the
 * IDS_MENU_* strings in [[ResourceBundleHandler]].get_localized_string().
 */
declare enum MenuId {
  // Navigation.
  MENU_ID_BACK = 100,
  MENU_ID_FORWARD = 101,
  MENU_ID_RELOAD = 102,
  MENU_ID_RELOAD_NOCACHE = 103,
  MENU_ID_STOPLOAD = 104,

  // Editing.
  MENU_ID_UNDO = 110,
  MENU_ID_REDO = 111,
  MENU_ID_CUT = 112,
  MENU_ID_COPY = 113,
  MENU_ID_PASTE = 114,
  MENU_ID_DELETE = 115,
  MENU_ID_SELECT_ALL = 116,

  // Miscellaneous.
  MENU_ID_FIND = 130,
  MENU_ID_PRINT = 131,
  MENU_ID_VIEW_SOURCE = 132,

  // Spell checking word correction suggestions.
  MENU_ID_SPELLCHECK_SUGGESTION_0 = 200,
  MENU_ID_SPELLCHECK_SUGGESTION_1 = 201,
  MENU_ID_SPELLCHECK_SUGGESTION_2 = 202,
  MENU_ID_SPELLCHECK_SUGGESTION_3 = 203,
  MENU_ID_SPELLCHECK_SUGGESTION_4 = 204,
  MENU_ID_SPELLCHECK_SUGGESTION_LAST = 204,
  MENU_ID_NO_SPELLING_SUGGESTIONS = 205,
  MENU_ID_ADD_TO_DICTIONARY = 206,

  // Custom menu items originating from the renderer process. For example,
  // plugin placeholder menu items or Flash menu items.
  MENU_ID_CUSTOM_FIRST = 220,
  MENU_ID_CUSTOM_LAST = 250,

  // All user-defined menu IDs should come between MENU_ID_USER_FIRST and
  // MENU_ID_USER_LAST to avoid overlapping the Chromium and CEF ID ranges
  // defined in the tools/gritsettings/resource_ids file.
  MENU_ID_USER_FIRST = 26500,
  MENU_ID_USER_LAST = 28500
}
