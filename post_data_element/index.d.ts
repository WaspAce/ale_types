/**
 * Class used to represent a single element in the request post data.
 */
declare class PostDataElement {
    /**
     * **true** if this object is read-only.
     */
    readonly is_read_only: boolean;

    /**
     * The type of this post data element.
     */
    readonly element_type: PostDataElementType;

    /**
     * The file name.
     */
    readonly file_name: string;

    /**
     * The number of bytes.
     */
    readonly bytes_count: number;


    /**
     * Remove all contents from the post data element.
     */
    set_to_empty(): void;

    /**
     * The post data element will represent a file.
     */
    set_to_file(file_name: string): void;

    /**
     * The post data element will represent bytes.
     */
    set_to_bytes(bytes: number[]): void;

    /**
     * @returns Bytes of post data element.
     */
    get_bytes(): number[];
}