/**
 * Class representing image.
 */
declare class Image {
  constructor(
    rect?: Rect
  );

  /**
   * X coordinate to paint relative to other Image or [[GuiPanel]].
   */
  x: number;

  /**
   * Y coordinate to paint relative to other Image or [[GuiPanel]].
   */
  y: number;

  width: number;
  height: number;

  /**
   * Draw |images| on this image.
   */
  paint(
    images: Image[]
  ): void;

  /**
   * Get value of pixel at coordinates;
   */
  get_pixel(
    x: number,
    y: number
  ): string;

  /**
   * Sets the pixel by replacing the content at (|x|, |y|) with the specified color.
   * Alpha value is set to 255 (opaque)
   */
  set_pixel(
    x: number,
    y: number,
    color: string
  ): void;

  /**
   * 
   * Save this image to specified file.
   * Work only in develop mode.
   */
  save_to_file(
    file_name: string
  ): void;
}
