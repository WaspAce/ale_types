declare class StreamReader {
    constructor(
        bytes: number[]
    );

    read(
        bytes: number[],
        size: number,
        count: number
    ): void;

    seek(
        offset: number,
        whence: number
    ): void;

    tell(): void;

    eof(): void;

    may_block(): boolean;
}
