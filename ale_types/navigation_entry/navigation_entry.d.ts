declare class NavigationEntry {
    is_valid: boolean;
    url: string;
    display_url:string;
    original_url: string;
    title: string;
    transition_type: TransitionType;
    has_pos_data: boolean;
    completion_time: CefTime;
    http_status_code: number;
}
