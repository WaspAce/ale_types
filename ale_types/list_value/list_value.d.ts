declare class ListValue {
    readonly size: number;
    readonly is_valid: boolean;
    readonly is_owned: boolean;
    readonly is_read_only: boolean;

    is_same(that: ListValue): boolean;
    is_equal(that: ListValue): boolean;
    copy(): ListValue;
    set_size(size: number): boolean;
    clear(): boolean;
    remove(index: number): boolean;
    get_type(index: number): ValueType;
    get_value(index: number): Value;
    get_bool(index: number): boolean;
    get_int(index: number): number;
    get_double(index: number): number;
    get_string(index: number): string;
    get_binary(index: number): BinaryValue;
    get_dictionary(index: number): DictionaryValue;
    get_list(index: number): ListValue;
    set_value(index: number, value: Value): boolean;
    set_null(index: number): boolean;
    set_bool(index: number, value: boolean): boolean;
    set_int(index: number, value: number): boolean;
    set_double(index: number, value: number): boolean;
    set_string(index: number, value: string): boolean;
    set_binary(index: number, value: BinaryValue): boolean;
    set_dictionary(index: number, value: DictionaryValue): boolean;
    set_list(index: number, value: ListValue): boolean;
}
