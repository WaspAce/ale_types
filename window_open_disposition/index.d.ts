/**
 * The manner in which a link click should be opened. These constants match
 * their equivalents in Chromium's window_open_disposition.h and should not be
 * renumbered.
 */
declare enum WindowOpenDisposition {
    WOD_UNKNOWN = 0,
    WOD_CURRENT_TAB = 1,
    WOD_SINGLETON_TAB = 2,
    WOD_NEW_FOREGROUND_TAB = 3,
    WOD_NEW_BACKGROUND_TAB = 4,
    WOD_NEW_POPUP = 5,
    WOD_NEW_WINDOW = 6,
    WOD_SAVE_TO_DISK = 7,
    WOD_OFF_THE_RECORD = 8,
    WOD_IGNORE_ACTION = 9
}
