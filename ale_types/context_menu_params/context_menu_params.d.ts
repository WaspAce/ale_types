declare class ContextMenuParams {
  readonly x_coord: number;
  readonly y_coord: number;
  readonly type_flags: ContextMenuTypeFlags;
  readonly link_url: string;
  readonly unfiltered_link_url: string;
  readonly source_url: string;
  readonly has_image_contents: boolean;
  readonly title_text: string;
  readonly page_url: string;
  readonly frame_url: string;
  readonly frame_charset: string;
  readonly media_type: ContextMenuMediaType;
  readonly media_state_flags: ContextMenuMediaStateFlags;
  readonly selection_text: string;
  readonly misspelled_word: string;
  readonly is_editable: boolean;
  readonly is_spell_check_enabled: boolean;
  readonly edit_state_flags: ContextMenuEditStateFlags;
  readonly is_custom_menu: boolean;
  readonly is_pepper_menu: boolean;

  get_dictionary_suggestions(
    suggestions: StringList
  ): boolean;
}
