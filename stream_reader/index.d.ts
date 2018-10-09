/**
 * Class used to read data from a stream.
 */
declare class StreamReader {
    /**
     * 
     * @param bytes Array of byte that represent data.
     */
    constructor(
        bytes: number[]
    );

    
    /**
     * Read raw binary data to bytes;
     */
    read(
        bytes: number[],
        size: number,
        count: number
    ): void;

    /**
     * Seek to the specified offset position.
     * @param whence May be any one of SEEK_CUR, SEEK_END or SEEK_SET.
     * @returns Zero on success and non-zero on failure.
     */
    seek(
        offset: number,
        whence: number
    ): number;

    /**
     * @returns The current offset position.
     */
    tell(): number;

    /**
     * @returns true if at end of file.
     */
    eof(): boolean;


    /**
     * @returns true if this reader performs work like accessing the file
     * system which may block. Used as a hint for determining the thread to access
     * the reader from.
     */
    may_block(): boolean;
}
