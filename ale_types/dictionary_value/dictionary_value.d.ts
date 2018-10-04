declare class DictionaryValue {
    readonly size: number;
    readonly is_valid: boolean;
    readonly is_owned: boolean;
    readonly is_read_only: boolean;

    is_same(that: DictionaryValue): boolean;
    is_equal(that: DictionaryValue): boolean;
    copy(exclude_empty_children: boolean): DictionaryValue;
    clear(): boolean;
    has_key(key: string): boolean;
    get_keys(keys: StringList): boolean;
    remove(key: string): boolean;
    get_type(key: string): ValueType;

    get_value(key: string): Value;
    get_bool(key: string): boolean;
    get_int(key: string): number;
    get_double(key: string): number;
    get_string(key: string): string;
    get_binary(key: string): BinaryValue;
    get_dictionary(key: string): DictionaryValue;
    get_list(key: string): ListValue;

    set_value(key: string, value: Value): boolean;
    set_null(key: string): boolean;
    set_bool(key: string, value: Value): boolean
    set_int(key: string, value: Value): boolean;
    set_double(key: string, value: Value): boolean;
    set_string(key: string, value: Value): boolean;
    set_binary(key: string, value: Value): boolean;
    set_dictionary(key: string, value: Value): boolean;
    set_list(key: string, value: Value): boolean;
}
