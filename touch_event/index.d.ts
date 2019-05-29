/**
 * Class representing representing touch event information.
 */
declare class TouchEvent {
  /**
   * Id of a touch point. Must be unique per touch, can be any number except -1.
   * Note that a maximum of 16 concurrent touches will be tracked; touches
   * beyond that will be ignored.
   */
  id: number;
  
  /**
   * X coordinate relative to the left side of the view.
   */
  x: number;

  /**
   * Y coordinate relative to the top side of the view.
   */
  y: number;
  
  /**
   * X radius in pixels. Set to 0 if not applicable.
   */
  radius_x: number;
  
  /**
   * Y radius in pixels. Set to 0 if not applicable.
   */
  radius_y: number;
  
  /**
   * Rotation angle in radians. Set to 0 if not applicable.
   */
  rotation_angle: number;
  
  /**
   * The normalized pressure of the pointer input in the range of [0,1].
   * Set to 0 if not applicable.
   */
  pressure: number;
  
  /**
   * The state of the touch point. Touches begin with one CEF_TET_PRESSED event
   * followed by zero or more CEF_TET_MOVED events and finally one
   * CEF_TET_RELEASED or CEF_TET_CANCELLED event. Events not respecting this
   * order will be ignored.
   */
  type_: TouchEventType;
  
  /**
   * Array describing any pressed modifier keys. See
   * [[EventFlags]] for values.
   */
  modifiers: EventFlags[]

  /**
   * The device type that caused the event.
   */
  pointer_type: PointerType;
}
