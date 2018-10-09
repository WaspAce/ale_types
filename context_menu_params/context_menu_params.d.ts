/**
 * Provides information about the context menu state.
 */
declare class ContextMenuParams {
  /**
   * The X coordinate of the mouse where the context menu was invoked.
   * Coords are relative to the associated RenderView's origin.
   */
  readonly x_coord: number;

  /**
   * The Y coordinate of the mouse where the context menu was invoked.
   * Coords are relative to the associated RenderView's origin.
   */
  readonly y_coord: number;

  /**
   * Flags representing the type of node that the context menu was
   * invoked on.
   */
  readonly type_flags: ContextMenuTypeFlags[];

  /**
   * The URL of the link, if any, that encloses the node that the
   * context menu was invoked on.
   */
  readonly link_url: string;

  /**
   * The link URL, if any, to be used ONLY for "copy link address". We
   * don't validate this field in the frontend process.
   */
  readonly unfiltered_link_url: string;

  /**
   * The source URL, if any, for the element that the context menu was
   * invoked on. Example of elements with source URLs are img, audio, and video.
   */
  readonly source_url: string;

  /**
   * True if the context menu was invoked on an image which has non-
   * NULL contents.
   */
  readonly has_image_contents: boolean;

  /**
   * The title text or the alt text if the context menu was invoked on
   * an image.
   */
  readonly title_text: string;

  /**
   * The URL of the top level page that the context menu was invoked on.
   */
  readonly page_url: string;

  /**
   * The URL of the subframe that the context menu was invoked on.
   */
  readonly frame_url: string;

  /**
   * The character encoding of the subframe that the context menu was
   * invoked on.
   */
  readonly frame_charset: string;

  /**
   * The type of context node that the context menu was invoked on.
   */
  readonly media_type: ContextMenuMediaType;

  /**
   * Flags representing the actions supported by the media element, if
   * any, that the context menu was invoked on.
   */
  readonly media_state_flags: ContextMenuMediaStateFlags[];

  /**
   * The text of the selection, if any, that the context menu was
   * invoked on.
   */
  readonly selection_text: string;

  /**
   * The text of the misspelled word, if any, that the context menu was
   * invoked on.
   */
  readonly misspelled_word: string;

  /**
   * true if the context menu was invoked on an editable node.
   */
  readonly is_editable: boolean;

  /**
   * true  if the context menu was invoked on an editable node where
   * spell-check is enabled.
   */
  readonly is_spell_check_enabled: boolean;

  /**
   * Flags representing the actions supported by the editable node, if
   * any, that the context menu was invoked on.
   */
  readonly edit_state_flags: ContextMenuEditStateFlags[];

  /**
   * true if the context menu contains items specified by the
   * renderer process (for example, plugin placeholder or pepper plugin menu
   * items).
   */
  readonly is_custom_menu: boolean;

  /**
   * true if the context menu was invoked from a pepper plugin.
   */
  readonly is_pepper_menu: boolean;


  /**
   * Fills in |suggestions| from the spell check service for the misspelled word
   * if there is one.
   * @returns true if suggestions exist, false otherwise.
   */
  get_dictionary_suggestions(
    suggestions: StringList
  ): boolean;
}
