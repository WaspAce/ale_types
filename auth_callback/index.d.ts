/**
 * Callback class used for asynchronous continuation of authentication
 * requests.
 */
declare class AuthCallback {
  /**
   * Continue the authentication request.
   */
  cont(
    username: string,
    password: string
  ): void;
  
  /**
   * Cancel the authentication request.
   */
  cancel(): void;
}
