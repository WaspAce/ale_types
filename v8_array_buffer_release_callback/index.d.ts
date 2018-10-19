/**
 * Callback class that is passed to [[subprocess]].create_array_buffer.
 */
declare class V8ArrayBufferReleaseCallback {
  /**
   * 
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
    delegate?: object
  );

  /**
   * Called to release |buffer| when the ArrayBuffer JS object is garbage
	 * collected. |buffer| is the value that was passed to create_array_buffer along
	 * with this object.
   * @event
   * @todo
   */
  on_release_buffer: () => void;
}