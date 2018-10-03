declare class StringMultimap {
    size: number;

    find_count(key: string): number;
    get_enumerate(key: string, value_index: number): string;
    get_key(index: number): string;
    get_value(index: number): string;
    append(key: string, value: string);
    clear();
}
