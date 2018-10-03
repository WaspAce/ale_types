declare class PostData {
    readonly is_read_only: boolean;
    readonly has_excluded_elements: boolean;
    readonly element_count: number;

    get_elements(): PostDataElement[];
    remove_element(element: PostDataElement): boolean;
    add_element(element: PostDataElement): boolean;
    remove_elements();
}
