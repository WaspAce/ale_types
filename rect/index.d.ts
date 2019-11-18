/**
 * Class representing a rectangle.
 */
declare class Rect {
  public x: number;
  public y: number;
  public width: number;
  public height: number;
  public left: number;
  public top: number;
  public right: number;
  public bottom: number;
  public readonly center: Point;

  constructor(
    x?: number,
    y?: number,
    width?: number,
    height?: number
  );

  /**
   * Copy properties from **that**.
   */
  public copy_from(
    that: Rect
  ): void;

  /**
   * @returns **true** if all properties are equals to **that**'s properties.
   */
  public is_equal(
    that: Rect
  ): boolean;

  /**
   * @returns **true** if rect intersects that rect.
   */
  public intersects(
    that: Rect
  ): boolean;

  /**
   * @returns intersection rect.
   */
  public intersection(
    that: Rect
  ): Rect;

  /**
   * @returns **true** if rect has point.
   */
  public has_point(
    point: Point
  ): boolean;
}