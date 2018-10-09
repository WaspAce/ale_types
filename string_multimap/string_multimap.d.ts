/**
 * String multimaps are a set of key/value string pairs.
 * More than one value can be assigned to a single key.
 */
declare class StringMultimap {
    /**
     * The number of elements in the string multimap.
     */
    size: number;


    /**
     * @returns The number of values with the specified key.
     */
    find_count(key: string): number;

    /**
     * @returns The value_index-th value with the specified key.
     */
    get_enumerate(key: string, value_index: number): string;

    /**
     * @returns The key at the specified zero-based string multimap index.
     */
    get_key(index: number): string;

    /**
     * 
     * @returns The value at the specified zero-based string multimap index.
     */
    get_value(index: number): string;

    /**
     * Append a new key/value pair at the end of the string multimap.
     */
    append(key: string, value: string): void;

    /**
     * Clear the string multimap.
     */
    clear(): void;
}
