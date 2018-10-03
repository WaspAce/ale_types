declare class Rect {
  public x: number;
  public y: number;
  public width: number;
  public height: number;

  public copy_from(
    that: Rect): boolean;
  public is_equal(
    that: Rect): boolean;
}