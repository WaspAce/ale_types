/**
 * Input mode of a virtual keyboard. These constants match their equivalents
 * in Chromium's text_input_mode.h and should not be renumbered.
 * See https://html.spec.whatwg.org/#input-modalities:-the-inputmode-attribute
 */
declare enum TextInputMode {
  CEF_TEXT_INPUT_MODE_DEFAULT = 0,
  CEF_TEXT_INPUT_MODE_NONE = 1,
  CEF_TEXT_INPUT_MODE_TEXT = 2,
  CEF_TEXT_INPUT_MODE_TEL = 3,
  CEF_TEXT_INPUT_MODE_URL = 4,
  CEF_TEXT_INPUT_MODE_EMAIL = 5,
  CEF_TEXT_INPUT_MODE_NUMERIC = 6,
  CEF_TEXT_INPUT_MODE_DECIMAL = 7,
  CEF_TEXT_INPUT_MODE_SEARCH = 8
}
