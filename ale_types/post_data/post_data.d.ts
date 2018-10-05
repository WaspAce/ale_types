/**
 * Class used to represent post data for a web request.
 */
declare class PostData {
    /**
     * **true** if this object is read-only.
     */
    readonly is_read_only: boolean;

    /**
     * **true** if the underlying POST data includes elements that are not
     * represented by this cef_post_data_t object (for example, multi-part file
     * upload data). Modifying [[PostData]] objects with excluded elements may
     * result in the request failing.
     */
    readonly has_excluded_elements: boolean;

    /**
     * The number of existing post data elements.
     */
    readonly element_count: number;

    /**
     * Retrieve the post data elements.
     */
    get_elements(): PostDataElement[];

    /**
     * Remove the specified post data element.
     * @returns **true** if the removal succeeds.
     */
    remove_element(element: PostDataElement): boolean;

    /**
     * Add the specified post data element.
     * @returns **true** if the add succeeds.
     */
    add_element(element: PostDataElement): boolean;

    /**
     * Remove all existing post data elements.
     */
    remove_elements();
}
