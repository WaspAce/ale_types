/**
 * Class representing a dictionary value.
 */
declare class DictionaryValue {
    /**
     * The number of values.
     */
    readonly size: number;

    /**
     * This object may become invalid if the underlying data is owned by another object (e.g. list or dictionary)
     * and that other object is then modified or destroyed. Do not call any other
     * functions if this is **false**.
     */
    readonly is_valid: boolean;

    /**
     * **true** if this object is currently owned by another object.
     */
    readonly is_owned: boolean;

    /**
     * **true** if the values of this object are read-only. Some APIs may
     * expose read-only objects.
     */
    readonly is_read_only: boolean;


    /**
     * @returns **true** if this object and |that| object have the same underlying
     * data. If **true** modifications to this object will also affect |that|
     * object and vice-versa.
     */
    is_same(
        that: DictionaryValue
    ): boolean;

    /**
     * @returns **true** if this object and |that| object have an equivalent
     * underlying value but are not necessarily the same object.
     */
    is_equal(
        that: DictionaryValue
    ): boolean;

    /**
     * @param exclude_empty_children If **true** any null dictionaries or lists will be excluded from the copy.
     * @returns A writable copy of this object.
     */
    copy(
        exclude_empty_children: boolean
    ): DictionaryValue;

    /**
     * Removes all values.
     * @returns **true** on success.
     */
    clear(): boolean;

    /**
     * @returns **true** if the current dictionary has a value for the given key.
     */
    has_key(
        key: string
    ): boolean;

    /**
     * Reads all keys for this dictionary into the specified StringList.
     */
    get_keys(
        keys: StringList
    ): boolean;

    /**
     * Removes the value at the specified key.
     * @returns **true** if the value was removed successfully.
     */
    remove(
        key: string
    ): boolean;

    /**
     * @returns The value type for the specified key.
     */
    get_type(
        key: string
    ): ValueType;

    /**
     * @returns The value at the specified key. For simple types the returned value
     * will copy existing data and modifications to the value will not modify this
     * object. For complex types (binary, dictionary and list) the returned value
     * will reference existing data and modifications to the value will modify
     * this object.
     */
    get_value(
        key: string
    ): Value;

    /**
     * @returns The value at the specified key as type bool.
     */
    get_bool(
        key: string
    ): boolean;

    /**
     * @returns The value at the specified key as type int.
     */
    get_int(
        key: string
    ): number;

    /**
     * @returns The value at the specified key as type double.
     */
    get_double(
        key: string
    ): number;

    /**
     * @returns The value at the specified key as type string.
     */
    get_string(
        key: string
    ): string;

    /**
     * @returns The value at the specified key as type binary. The returned value
     * will reference existing data.
     */
    get_binary(
        key: string
    ): BinaryValue;

    /**
     * @returns The value at the specified key as type dictionary. The returned
     * value will reference existing data and modifications to the value will
     * modify this object.
     */
    get_dictionary(
        key: string
    ): DictionaryValue;

    /**
     * @returns The value at the specified key as type list. The returned value
     * will reference existing data and modifications to the value will modify
     * this object.
     */
    get_list(
        key: string
    ): ListValue;

    /**
     * Sets the value at the specified key. 
     * @param value If |value| represents simple data then the underlying data
     * will be copied and modifications to |value| will not modify this object. If
     * |value| represents complex data (binary, dictionary or list) then the
     * underlying data will be referenced and modifications to |value| will modify
     * this object.
     * @returns **true** if the value was set successfully. 
     */
    set_value(
        key: string,
        value: Value
    ): boolean;

    /**
     * Sets the value at the specified key as type null.
     * @returns **true** if the value was set successfully.
     */
    set_null(
        key: string
    ): boolean;

    /**
     * Sets the value at the specified key as type bool.
     * @returns **true** if the value was set successfully.
     */
    set_bool(
        key: string,
        value: Value
    ): boolean

    /**
     * Sets the value at the specified key as type int.
     * @returns **true** if the value was set successfully.
     */
    set_int(
        key: string,
        value: Value
    ): boolean;

    /**
     * Sets the value at the specified key as type double.
     * @returns **true** if the value was set successfully.
     */
    set_double(
        key: string,
        value: Value
    ): boolean;

    /**
     * Sets the value at the specified key as type string.
     * @returns **true** if the value was set successfully.
     */
    set_string(
        key: string,
        value: Value
    ): boolean;

    /**
     * Sets the value at the specified key as type binary.
     * @param value  If |value| is currently owned by another object
     * then the value will be copied and the |value| reference will not change.
     * Otherwise, ownership will be transferred to this object and the |value|
     * reference will be invalidated.
     * @returns **true** if the value was set successfully.
     */
    set_binary(
        key: string,
        value: Value
    ): boolean;

    /**
     * Sets the value at the specified key as type dict.
     * @param value If |value| is currently owned by another object
     * then the value will be copied and the |value| reference will not change.
     * Otherwise, ownership will be transferred to this object and the |value|
     * reference will be invalidated.
     * @returns **true** if the value was set successfully.
     */
    set_dictionary(
        key: string,
        value: Value
    ): boolean;

    /**
     * Sets the value at the specified key as type list.
     * @param value If |value| is currently owned by another object
     * then the value will be copied and the |value| reference will not change.
     * Otherwise, ownership will be transferred to this object and the |value|
     * reference will be invalidated.
     * @returns **true**  if the value was set successfully.
     */
    set_list(
        key: string,
        value: Value
    ): boolean;
}
