/**
 * Class used to represent a frame in the browser window.
 */
declare class Frame {
    /**
     * **true** if this object is currently attached to a valid frame.
     */
    readonly is_valid: boolean;

    /**
     * **true** if this is the main (top-level) frame.
     */
    readonly is_main: boolean;

    /**
     * **true** if this is the focused frame.
     */
    readonly is_focused: boolean;

    /**
     * The name for this frame. If the frame has an assigned name (for
     * example, set via the iframe "name" attribute) then that value will be
     * assigned to property. Otherwise a unique name will be constructed based on the frame
     * parent hierarchy. The main (top-level) frame will always have an empty name value.
     */
    readonly name: string;

    /**
     * The globally unique identifier for this frame or < 0 if the
     * underlying frame does not yet exist.
     */
    readonly identifier: number;

    /**
     * The URL currently loaded in this frame.
     */
    readonly url: string;

    /**
     * Execute undo in this frame.
     */
    undo(): void;

    /**
     * Execute redo in this frame.
     */
    redo(): void;

    /**
     * Execute cut in this frame.
     */
    cut(): void;

    /**
     * Execute copy in this frame.
     */
    copy(): void;

    /**
     * Execute paste in this frame.
     */
    paste(): void;

    /**
     * Execute delete in this frame.
     */
    del(): void;

    /**
     * Execute select all in this frame.
     */
    select_all(): void;

    /**
     * Retrieve this frame's HTML source as a string sent to the specified
     * **visitor**.
     */
    get_source(visitor: StringVisitor): void;

    /**
     * Retrieve this frame's display text as a string sent to the specified
     * **visitor**.
     */
    get_text(visitor: StringVisitor): void;

    /**
     * Load the request represented by the **request** object.
     */
    load_request(request: Request): void;

    /**
     * Load the specified **url**.
     */
    load_url(url: string): void;

    /**
     * Load the contents of **string_val** with the specified dummy **url**.
     * @param url Should have a standard scheme (for example, http scheme) or behaviors like
     * link clicks and web security restrictions may not behave as expected.
     */
    load_string(string_val: string, url: string): void;

    /**
     * Execute a string of JavaScript code in this frame.
     * @param script_url The URL where the script in question can be found, if any. The
     * renderer may request this URL to show the developer the source of the
     * error.
     * @param start_line The base line number to use for error reporting.
     */
    execute_java_script(code: string, script_url: string, url: string, start_line: number): void;

    /**
     * @returns The parent of this frame or null if this is the main (top-level)
     * frame.
     */
    get_parent(): Frame | null;

    /**
     * @returns The browser that this frame belongs to.
     */
    get_browser(): Browser
}
