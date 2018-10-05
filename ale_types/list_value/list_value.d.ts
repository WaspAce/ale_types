/**
 * Class representing a list value.
 */
declare class ListValue {
    /**
     * The number of values.
     */
    readonly size: number;

    /**
     * true if this object is valid. This object may become invalid if
     * the underlying data is owned by another object (e.g. list or dictionary)
     * and that other object is then modified or destroyed. Do not call any other
     * functions if this is false.
     */
    readonly is_valid: boolean;

    /**
     * true if this object is currently owned by another object.
     */
    readonly is_owned: boolean;

    /**
     * true if the values of this object are read-only. Some APIs may
     * expose read-only objects.
     */
    readonly is_read_only: boolean;


    /**
     * @returns true if this object and |that| object have the same underlying
     * data. If true modifications to this object will also affect |that|
     * object and vice-versa.
     */
    is_same(
        that: ListValue
    ): boolean;

    /**
     * @returns true if this object and |that| object have an equivalent
     * underlying value but are not necessarily the same object.
     */
    is_equal(
        that: ListValue
    ): boolean;

    /**
     * @returns a writable copy of this object.
     */
    copy(): ListValue;

    /**
     * Sets the number of values. If the number of values is expanded all new
     * value slots will default to type null.
     * @returns true on success.
     */
    set_size(
        size: number
    ): boolean;

    /**
     * Removes all values.
     * @returns true on success.
     */
    clear(): boolean;

    /**
     * Removes the value at the specified index.
     */
    remove(
        index: number
    ): boolean;

    /**
     * @returns The value type at the specified index.
     */
    get_type(
        index: number
    ): ValueType;

    /**
     * @returns The value at the specified index. For simple types the returned
     * value will copy existing data and modifications to the value will not
     * modify this object. For complex types (binary, dictionary and list) the
     * returned value will reference existing data and modifications to the value
     * will modify this object.
     */
    get_value(
        index: number
    ): Value;

    /**
     * @returns the value at the specified index as type bool.
     */
    get_bool(
        index: number
    ): boolean;

    /**
     * @returns the value at the specified index as type int.
     */
    get_int(
        index: number
    ): number;

    /**
     * @returns the value at the specified index as type double.
     */
    get_double(
        index: number
    ): number;

    /**
     * @returns the value at the specified index as type string.
     */
    get_string(
        index: number
    ): string;

    /**
     * @returns the value at the specified index as type binary. The returned value
     * will reference existing data.
     */
    get_binary(
        index: number
    ): BinaryValue;

    /**
     * @returns the value at the specified index as type dictionary. The returned
     * value will reference existing data and modifications to the value will
     * modify this object.
     */
    get_dictionary(
        index: number
    ): DictionaryValue;

    /**
     * @returns the value at the specified index as type list. The returned value
     * will reference existing data and modifications to the value will modify
     * this object.
     */
    get_list(
        index: number
    ): ListValue;

    /**
     * Sets the value at the specified index.
     * If |value| represents simple data then the underlying
     * data will be copied and modifications to |value| will not modify this
     * object. If |value| represents complex data (binary, dictionary or list)
     * then the underlying data will be referenced and modifications to |value|
     * will modify this object.
     * @returns true if the value was set successfully.
     */
    set_value(
        index: number,
        value: Value
    ): boolean;

    /**
     * Sets the value at the specified index as type null.
     * @returns true if the value was set successfully.
     */
    set_null(
        index: number
    ): boolean;

    /**
     * Sets the value at the specified index as type bool.
     * @returns true if the value was set successfully.
     */
    set_bool(
        index: number,
        value: boolean
    ): boolean;

    /**
     * Sets the value at the specified index as type int.
     * @returns true if the value was set successfully.
     */
    set_int(
        index: number,
        value: number
    ): boolean;

    /**
     * Sets the value at the specified index as type double.
     * @returns true if the value was set successfully.
     */
    set_double(
        index: number,
        value: number
    ): boolean;

    /**
     * Sets the value at the specified index as type string.
     * @returns true if the value was set successfully.
     */
    set_string(
        index: number,
        value: string
    ): boolean;

    /**
     * Sets the value at the specified index as type binary.
     * If |value| is currently owned by another
     * object then the value will be copied and the |value| reference will not
     * change. Otherwise, ownership will be transferred to this object and the
     * |value| reference will be invalidated.
     * @returns true if the value was set successfully.
     */
    set_binary(
        index: number,
        value: BinaryValue
    ): boolean;

    /**
     * Sets the value at the specified index as type dict.
     * If |value| is currently owned by another object
     * then the value will be copied and the |value| reference will not change.
     * Otherwise, ownership will be transferred to this object and the |value|
     * reference will be invalidated.
     * @returns true if the value was set successfully.
     */
    set_dictionary(
        index: number,
        value: DictionaryValue
    ): boolean;

    /**
     * Sets the value at the specified index as type list.
     * If |value| is currently owned by another object
     * then the value will be copied and the |value| reference will not change.
     * Otherwise, ownership will be transferred to this object and the |value|
     * reference will be invalidated.
     * @returns true if the value was set successfully.
     */
    set_list(
        index: number,
        value: ListValue
    ): boolean;
}
