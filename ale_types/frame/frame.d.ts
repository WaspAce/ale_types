declare class Frame {
    readonly is_valid: boolean;
    readonly is_main: boolean;
    readonly is_focused: boolean;
    readonly name: string;
    readonly identifier: number;
    readonly url: string;

    undo();
    redo();
    cut();
    copy();
    paste();
    del();
    select_all();
    get_source(visitor: StringVisitor);
    get_text(visitor: StringVisitor);
    load_request(request: Request);
    load_url(url: string);
    load_string(string_val: string, url: string);
    execute_java_script(code: string, script_url: string, url: string, start_line: number);
    get_parent(): Frame;
    get_browser(): Browser






}
