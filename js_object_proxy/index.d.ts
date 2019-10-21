/**
 * Class representing Javascript object.
 */
declare class JSObjectProxy {
  /**
   * Called when JS gets property |name|.
   * @event
   */
  on_get_property: (
    name: string
  ) => any;

  /**
   * Called when JS sets property |name|.
   * @event
   */
  on_set_property: (
    name: string,
    value: any
  ) => void;

  /**
   * Called when JS adds property |name|.
   * @event
   */
  on_add_property: (
    name: string,
    value: any
  ) => void;

  /**
   * Called when JS deletes property |name|.
   * @event
   */
  on_delete_property: (
    name: string
  ) => void;

  /**
   * Called when JS enumerates object.
   * @event
   */
  on_enumerate: () => void;

  /**
   * Called when JS finalizes object.
   * @event
   */
  on_finalize: () => void;

  /**
   * Called when JS calls function |name|.
   * @event
   */
  on_call_method: (
    name: string,
    ...arguments: any[]
  ) => any;
}
