/**
 * Initialization settings.
 */
declare class CefAppSettings {
  /**
   * To persist session cookies (cookies without an expiry date or validity
   * interval) by default when using the global cookie manager set this value to
   * true. Session cookies are generally intended to be transient and most
   * Web browsers do not persist them. Can be overridden for
   * individual [[RequestContext]] instances.
   */
  persist_session_cookies: boolean;

  /**
   * Value that will be returned as the User-Agent HTTP header. If empty the
   * default User-Agent string will be used.
   */
  user_agent: string;

  /**
   * Value that will be inserted as the product portion of the default
   * User-Agent string. If empty the Chromium product version will be used. If
   * |user_agent| is specified this value will be ignored.
   */
  product_version: string;

  /**
   * The locale string that will be passed to WebKit. If empty the default
   * locale of "en-US" will be used. This value is ignored on Linux where locale
   * is determined using environment variable parsing with the precedence order:
   * LANGUAGE, LC_ALL, LC_MESSAGES and LANG.
   */
  locale: string;

  /**
   * Comma delimited ordered list of language codes without any whitespace that
   * will be used in the "Accept-Language" HTTP header. May be overridden on a
   * per-browser basis using the [[BrowserSettings]].accept_language_list value.
   * If both values are empty then "en-US,en" will be used. Can be overridden
   * for individual [[RequestContext]] instances.
   */
  accept_language_list: string;
}
