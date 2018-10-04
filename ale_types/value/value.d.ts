declare class Value {
    readonly value_type: ValueType;
    readonly bool: boolean;
    readonly int: number;
    readonly double: number;
    readonly str: string;
    readonly is_valid: boolean;
    readonly is_owned: boolean;
    readonly is_read_only: boolean;

    is_same(that: Value): boolean;
    is_equal(that: Value): boolean;
    copy(): Value;
    get_binary(): BinaryValue;
    get_dictionary(): DictionaryValue;
    get_list(): ListValue;
    set_null(): boolean;
    set_bool(value: boolean): boolean;
    set_int(value: number): boolean;
    set_double(value: number): boolean;
    set_str(value: string): boolean;
    set_binary(value: BinaryValue): boolean;
    set_dictionary(value: DictionaryValue): boolean;
    set_list(value: ListValue): boolean;
}
