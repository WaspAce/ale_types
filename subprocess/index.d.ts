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
   * Register a custom scheme. This function should not be called for the built-
	 * in HTTP, HTTPS, FILE, FTP, ABOUT and DATA schemes.
	 *
	 * This function should only be called once per unique scheme.scheme_name value.
   * The registered schemes should be the same across all processes.
   * 
   * MUST be called before [[subprocess]].start() called.
   */
  static add_custom_scheme(
    scheme: CustomScheme
  ): void;
}