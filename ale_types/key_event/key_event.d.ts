declare class KeyEvent {
    event_type: KeyEventType;
    modifiers: EventFlags[];
    windows_key_code: number;
    native_key_code: number;
    is_system_key: boolean;
    character: string;
    unmodified_character: string;
    focus_on_editable_field: boolean;
}
