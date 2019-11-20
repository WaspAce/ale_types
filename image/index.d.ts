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
   * Loads image from specified file.
   * Works only in develop mode.
   */
  load_from_file(
    file_name: string
  ): void;

  /**
   * Save this image to specified file.
   * Works only in develop mode.
   */
  save_to_file(
    file_name: string
  ): void;

  /**
   * Clears image.
   */
  clear(): void;


  shadowBlur: number;
  shadowColor: string;
  shadowOffsetX: number;
  shadowOffsetY: number;
  lineCap: string;
  lineJoin: string;
  lineWidth: number;
  miterLimit: number;

  setFillStyle(
    value: string
  );
  setStrokeStyle(
    value: string
  );
  createLinearGradient(
    x0: number,
    y0: number,
    x1: number,
    y1: number
  );

  createPattern(
    image: Image,
    repetition: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'
  );

  createRadialGradient(
    x0: number,
    y0: number,
    r0: number,
    x1: number,
    y1: number,
    r1: number
  );

  clearRect(
    x: number,
    y: number,
    width: number,
    height: number
  );

  fillRect(
    x: number,
    y: number,
    width: number,
    height: number
  );

  rect(
    x: number,
    y: number,
    width: number,
    height: number
  );

  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number
  );

  arc(
    x: number,
    y: number,
    r: number,
    sAngle: number,
    eAngle: number,
    counterclockwise?: boolean
  );

  arcTo(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    r: number
  );

  beginPath();

  bezierCurveTo(
    p1x: number,
    cp1y: number,
    cp2x: number,
    cp2y: number,
    x: number,
    y: number
  );

  clip();

  closePath();

  fill();

  isPointInPath(
    x: number,
    y: number
  );

  lineTo(
    x: number,
    y: number
  );

  moveTo(
    x: number,
    y: number
  );

  quadraticCurveTo(
    cpx: number,
    cpy: number,
    x: number,
    y: number
  );

  stroke();

  rotate(
    angle: number
  );

  scale(
    scalewidth: number,
    scaleheight: number
  );

  setTransform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  );

  transform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  );

  translate(
    x: number,
    y: number
  );

  toDataURL(): string;

}

