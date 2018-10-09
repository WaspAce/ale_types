/**
 * Class that wraps other data value types. Complex types (binary,
 * dictionary and list) will be referenced but not owned by this object. Can be
 * used on any process and thread.
 */
declare class Value {
    /**
     * The underlying value type.
     */
    readonly value_type: ValueType;

    /**
     * The underlying value as type bool.
     */
    readonly bool: boolean;

    /**
     * The underlying value as type int.
     */
    readonly int: number;

    /**
     * The underlying value as type double.
     */
    readonly double: number;

    /**
     * The underlying value as type string.
     */
    readonly str: string;

    /**
     * true if the underlying data is valid. This will always be true
     * for simple types. For complex types (binary, dictionary and list) the
     * underlying data may become invalid if owned by another object (e.g. list or
     * dictionary) and that other object is then modified or destroyed. This value
     * object can be re-used by calling set*() even if the underlying data is
     * invalid.
     */
    readonly is_valid: boolean;

    /**
     * true if the underlying data is owned by another object.
     */
    readonly is_owned: boolean;

    /**
     * true if the underlying data is read-only. Some APIs may expose
     * read-only objects.
     */
    readonly is_read_only: boolean;


    /**
     * @returns true if this object and |that| object have the same underlying
     * data. If true (1) modifications to this object will also affect |that|
     * object and vice-versa.
     */
    is_same(
        that: Value
    ): boolean;

    /**
     * @returns true if this object and |that| object have an equivalent
     * underlying value but are not necessarily the same object.
     */
    is_equal(
        that: Value
    ): boolean;

    /**
     * @returns a copy of this object. The underlying data will also be copied.
     */
    copy(): Value;

    /**
     * @returns the underlying value as type binary. The returned reference may
     * become invalid if the value is owned by another object or if ownership is
     * transferred to another object in the future. To maintain a reference to the
     * value after assigning ownership to a dictionary or list pass this object to
     * the set_value() function instead of passing the returned reference to
     * set_binary().
     */
    get_binary(): BinaryValue;

    /**
     * @returns the underlying value as type dictionary. The returned reference may
     * become invalid if the value is owned by another object or if ownership is
     * transferred to another object in the future. To maintain a reference to the
     * value after assigning ownership to a dictionary or list pass this object to
     * the set_value() function instead of passing the returned reference to
     * set_dictionary().
     */
    get_dictionary(): DictionaryValue;

    /**
     * @returns the underlying value as type list. The returned reference may
     * become invalid if the value is owned by another object or if ownership is
     * transferred to another object in the future. To maintain a reference to the
     * value after assigning ownership to a dictionary or list pass this object to
     * the set_value() function instead of passing the returned reference to
     * set_list().
     */
    get_list(): ListValue;

    /**
     * Sets the underlying value as type null.
     * @returns true if the value was set successfully.
     */
    set_null(): boolean;

    /**
     * Sets the underlying value as type bool.
     * @returns true if the value was set successfully.
     */
    set_bool(
        value: boolean
    ): boolean;

    /**
     * Sets the underlying value as type int.
     * @returns true if the value was set successfully.
     */
    set_int(
        value: number
    ): boolean;

    /**
     * Sets the underlying value as type double.
     * @returns true if the value was set successfully.
     */
    set_double(
        value: number
    ): boolean;

    /**
     * Sets the underlying value as type string.
     * @returns true if the value was set successfully.
     */
    set_str(
        value: string
    ): boolean;

    /**
     * Sets the underlying value as type binary. This object keeps a reference
     * to |value| and ownership of the underlying data remains unchanged.
     * @returns true if the value was set successfully.
     */
    set_binary(
        value: BinaryValue
    ): boolean;

    /**
     * Sets the underlying value as type dict. This object keeps a reference
     * to |value| and ownership of the underlying data remains unchanged.
     * @returns true if the value was set successfully. 
     */
    set_dictionary(
        value: DictionaryValue
    ): boolean;

    /**
     * Sets the underlying value as type list. This object keeps a reference
     * to |value| and ownership of the underlying data remains unchanged. 
     * @returns true if the value was set successfully.
     */
    set_list(
        value: ListValue
    ): boolean;
}
