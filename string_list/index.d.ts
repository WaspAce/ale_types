/**
 * String maps are a set of key/value string pairs.
 */
declare class StringList {
    /**
     * The number of elements in the string list.
     */
    readonly count: number;

    /**
     * Retrieve the value at the specified zero-based string list index.
     */
    get_value(index: number): string;

    /**
     * Append a new value at the end of the string list.
     */
    add(value: string): void;

    /**
     * Clear the string list.
     */
    clear(): void;

    /**
     * Creates a copy of an existing string list.
     */
    copy(): StringList;
}
