declare type JSObjectProxyOnGetProperty = (
  name: string
) => any;

declare type JSObjectProxyOnSetProperty = (
  name: string,
  value: any
) => void;

declare type JSObjectProxyOnAddProperty = (
  name: string,
  value: any
) => void;

declare type JSObjectProxyOnDeleteProperty = (
  name: string
) => void;

declare type JSObjectProxyOnEnumerate = () => void;

declare type JSObjectProxyOnFinalize = () => void;

declare type JSObjectProxyOnCallMethod = (
  name: string,
  ...arguments: any[]
) => any;

/**
 * Class representing Javascript object.
 */
declare class JSObjectProxy {
  /**
   * Called when JS gets property |name|.
   * @event
   */
  on_get_property: JSObjectProxyOnGetProperty;

  /**
   * Called when JS sets property |name|.
   * @event
   */
  on_set_property: JSObjectProxyOnSetProperty;

  /**
   * Called when JS adds property |name|.
   * @event
   */
  on_add_property: JSObjectProxyOnAddProperty;

  /**
   * Called when JS deletes property |name|.
   * @event
   */
  on_delete_property: JSObjectProxyOnDeleteProperty;

  /**
   * Called when JS enumerates object.
   * @event
   */
  on_enumerate: JSObjectProxyOnEnumerate;

  /**
   * Called when JS finalizes object.
   * @event
   */
  on_finalize: JSObjectProxyOnFinalize;

  /**
   * Called when JS calls function |name|.
   * @event
   */
  on_call_method: JSObjectProxyOnCallMethod;
}
