/**
 * Screen information.
 */
declare class ScreenInfo {
    /**
     * Device scale factor. Specifies the ratio between physical and logical
     * pixels.
     */
    device_scale_factor: number;

    /**
     * The screen depth in bits per pixel.
     */
    depth: number;

    /**
     * The bits per color component. This assumes that the colors are balanced
     * equally.
     */
    depth_per_component: number;

    /**
     * This can be true for black and white printers.
     */
    is_monochrome: boolean;

    /**
     * This is set from the rcMonitor member of MONITORINFOEX, to whit:
     *   "A RECT structure that specifies the display monitor rectangle,
     *   expressed in virtual-screen coordinates. Note that if the monitor
     *   is not the primary display monitor, some of the rectangle's
     *   coordinates may be negative values."
     *
     * The |rect| and |available_rect| properties are used to determine the
     * available surface for rendering popup views.
     */
    readonly rect: Rect;

    /**
     * This is set from the rcWork member of MONITORINFOEX, to whit:
     *   "A RECT structure that specifies the work area rectangle of the
     *   display monitor that can be used by applications, expressed in
     *   virtual-screen coordinates. Windows uses this rectangle to
     *   maximize an application on the monitor. The rest of the area in
     *   rcMonitor contains system windows such as the task bar and side
     *   bars. Note that if the monitor is not the primary display monitor,
     *   some of the rectangle's coordinates may be negative values".
     *
     * The |rect| and |available_rect| properties are used to determine the
     * available surface for rendering popup views.
     */
    readonly available_rect: Rect;
}
