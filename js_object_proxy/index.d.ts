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
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Called when JS gets property |name|.
   * @event
   */
  get_property: JSObjectProxyOnGetProperty;

  /**
   * Called when JS sets property |name|.
   * @event
   */
  set_property: JSObjectProxyOnSetProperty;

  /**
   * Called when JS adds property |name|.
   * @event
   */
  add_property: JSObjectProxyOnAddProperty;

  /**
   * Called when JS deletes property |name|.
   * @event
   */
  delete_property: JSObjectProxyOnDeleteProperty;

  /**
   * Called when JS enumerates object.
   * @event
   */
  enumerate: JSObjectProxyOnEnumerate;

  /**
   * Called when JS finalizes object.
   * @event
   */
  finalize: JSObjectProxyOnFinalize;

  /**
   * Called when JS calls function |name|.
   * @event
   */
  call_method: JSObjectProxyOnCallMethod;
}
