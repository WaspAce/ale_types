/**
 * Class representing image.
 */
declare class Image {
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
   * 
   * Save this image to specified file.
   * Work only in develop mode.
   */
  save_to_file(
    file_name: string
  ): void;
}
