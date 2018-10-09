/**
 * 
 */
declare class WindowInfo {
    x: number;
    y: number;
    width: number;
    height: number;

    /**
     * Set to true to enable transparent painting. When this value is true
     * a transparent background color will be used (RGBA=0x00000000).
     * When this value is false the background will be white and opaque.
     */
    transparent_painting_enable: boolean;
}