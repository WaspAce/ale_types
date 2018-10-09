/**
 * Key event types.
 */
declare enum KeyEventType {
    /**
     * Notification that a key transitioned from "up" to "down".
     */
    KEYEVENT_RAWKEYDOWN = 0,

    /**
     * Notification that a key was pressed. This does not necessarily correspond
     * to a character depending on the key and language. Use KEYEVENT_CHAR for
     * character input.
     */
    KEYEVENT_KEYDOWN = 1,

    /**
     * Notification that a key was released.
     */
    KEYEVENT_KEYUP = 2,

    /**
     * Notification that a character was typed. Use this for text input. Key
     * down events may generate 0, 1, or more than one character event depending
     * on the key, locale, and operating system.
     */
    KEYEVENT_CHAR = 3
}
