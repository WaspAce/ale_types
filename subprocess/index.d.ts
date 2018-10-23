/**
 * 
 */
declare class subprocess {
  /**
   * The handler for functionality specific to the render process.
   */
  static render_process_handler: RenderProcessHandler;

  /**
   * 
   */
  static start();

  /**
   * 
   */
  static register_js_extension(
    name: string,
    code: string,
    handler: V8Handler
  ): boolean;
}