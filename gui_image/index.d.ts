/**
 * Class representing GUI image.
 */
declare class GuiImage extends GuiControl {
  /**
   * @param parent The parent control which will contain this control.
   * @param delegate Object, on whose behalf (this) events will be triggered.
   */
  constructor(
      parent: GuiControl,
      delegate?: object
  );

  /**
   * Loads image from specified file.
   * Works only in develop mode.
   */
  load_from_file(
    file_name: string
  ): void;

  /**
   * Draw |images| on this control's canvas.
   */
  paint(
    images: Image[]
  ): void;
}
