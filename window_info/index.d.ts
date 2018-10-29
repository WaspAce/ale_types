/**
 * 
 */
declare class WindowInfo {
    x: number;
    y: number;
    width: number;
    height: number;

    /**
     * Set to true to enable the ability to issue BeginFrame requests from the
     * client application by calling [[BrowserHost]].send_external_begin_frame.
     */
    external_begin_frame_enabled: boolean;
}