declare class CefParser {
  /**
   * This is a convenience function for formatting a URL in a concise and human-
   * friendly way to help users make security-related decisions (or in other
   * circumstances when people need to distinguish sites, origins, or otherwise-
   * simplified URLs from each other). Internationalized domain names (IDN) may be
   * presented in Unicode if the conversion is considered safe. The returned value
   * will (a) omit the path for standard schemes, excepting file and filesystem,
   * and (b) omit the port if it is the default for the scheme.
   */
  static format_url_for_security_display(
    origin_url: string
  ): string;

  /**
   * Returns the mime type for the specified file extension or an empty string if
   * unknown.
   */
  static get_mime_type(
    extension: string
  ): string;

  /**
   * Get the extensions associated with the given mime type. This should be passed
   * in lower case. There could be multiple extensions for a given mime type, like
   * "html,htm" for "text/html", or "txt,text,html,..." for "text/*". Any existing
   * elements in the provided vector will not be erased.
   */
  static get_extensions_for_mime_type(
    mime_type: string
  ): string[];

  /**
   * Escapes characters in |text| which are unsuitable for use as a query
   * parameter value. Everything except alphanumerics and -_.!~*'() will be
   * converted to "%XX". If |use_plus| is true (1) spaces will change to "+". The
   * result is basically the same as encodeURIComponent in Javacript.
   */
  static uri_encode(
    text: string,
    use_plus?: boolean
  ): string;

  /**
   * Unescapes |text| and returns the result. Unescaping consists of looking for
   * the exact pattern "%XX" where each X is a hex digit and converting to the
   * character with the numerical value of those digits (e.g. "i%20=%203%3b"
   * unescapes to "i = 3;"). If |convert_to_utf8| is true (1) this function will
   * attempt to interpret the initial decoded result as UTF-8. If the result is
   * convertable into UTF-8 it will be returned as converted. Otherwise the
   * initial decoded result will be returned.  The |unescape_rule| parameter
   * supports further customization the decoding process.
   */
  static uri_decode(
    text: string,
    convert_to_utf8: boolean,
    unescape_rule: UriUnescapeRuleFlags[]
  );
}
