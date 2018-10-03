declare class PostDataElement {
    readonly is_read_only: boolean;
    readonly element_type: PostDataElementType;
    readonly file_name: string;
    readonly bytes_count: number;

    set_to_empty();
    set_to_file(file_name: string);
    set_to_bytes(bytes: number[]);
    get_bytes(): number[];
}
