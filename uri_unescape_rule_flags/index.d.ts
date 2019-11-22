/**
 * URI unescape rules passed to CEF_PARSER.uri_decode()
 */
declare enum UriUnescapeRuleFlags {
  /**
   * Don't unescape anything special, but all normal unescaping will happen.
   * This is a placeholder and can't be combined with other flags (since it's
   * just the absence of them). All other unescape rules imply "normal" in
   * addition to their special meaning. Things like escaped letters, digits,
   * and most symbols will get unescaped with this mode.
   */
  UU_NORMAL,
  /**
   * Convert %20 to spaces. In some places where we're showing URLs, we may
   * want this. In places where the URL may be copied and pasted out, then
   * you wouldn't want this since it might not be interpreted in one piece
   * by other applications.
   */
  UU_SPACES,
  /**
   * Unescapes '/' and '\\'. If these characters were unescaped, the resulting
   * URL won't be the same as the source one. Moreover, they are dangerous to
   * unescape in strings that will be used as file paths or names. This value
   * should only be used when slashes don't have special meaning, like data
   * URLs.
   */
  UU_PATH_SEPARATORS,
  /**
   * Unescapes various characters that will change the meaning of URLs,
   * including '%', '+', '&', '#'. Does not unescape path separators.
   * If these characters were unescaped, the resulting URL won't be the same
   * as the source one. This flag is used when generating final output like
   * filenames for URLs where we won't be interpreting as a URL and want to do
   * as much unescaping as possible.
   */
  UU_URL_SPECIAL_CHARS_EXCEPT_PATH_SEPARATORS,
  /**
   * Unescapes characters that can be used in spoofing attempts (such as LOCK)
   * and control characters (such as BiDi control characters and %01).  This
   * INCLUDES NULLs.  This is used for rare cases such as data: URL decoding
   * where the result is binary data.
   *
   * DO NOT use UU_SPOOFING_AND_CONTROL_CHARS if the URL is going to be
   * displayed in the UI for security reasons.
   */
  UU_SPOOFING_AND_CONTROL_CHARS,
  /**
   * URL queries use "+" for space. This flag controls that replacement.
   */
  UU_REPLACE_PLUS_WITH_SPACE
}
