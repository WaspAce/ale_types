declare class Browser {
  constructor(
    window_info: WindowInfo,
    client: BrowserClient,
    url: string,
    settings: BrowserSettings,
    request_context?: RequestContext
  )

  readonly can_go_back: boolean;
  readonly can_go_forward: boolean;
  readonly is_loading: boolean;
  readonly is_popup: boolean;
  readonly has_document: boolean;
  readonly identifier: number;
  readonly main_frame: Frame;
  readonly focused_frame: Frame;
  readonly frame_count: number;

  get_host(): BrowserHost;
  go_back();
  go_forward();
  reload();
  reload_ignore_cache();
  stop_load();
  is_same(
    that: Browser): boolean;
  get_frame_by_identifier(
    identifier: number): Frame;
  get_frame(
    name: string): Frame;
  get_frame_identifiers: Frame[];
  get_frame_names(
    names: StringList);
}
