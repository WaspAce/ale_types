/**
 * Class representing IME composition underline information. This is a thin
 * wrapper around Blink's WebCompositionUnderline class and should be kept in
 * sync with that.
 */
declare class CompositionUnderline {
    /**
     * Underline character range.
     */
    range: Range;

    /**
     * Text color.
     */
    color: string;

    /**
     * Background color.
     */
    background_color: string;

    /**
     * Set to true for thick underline.
     */
    thick: boolean;
}
