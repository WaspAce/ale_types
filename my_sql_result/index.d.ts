declare class MySqlResult {
    readonly error_code: number;
    readonly error_message: string;
    readonly insert_id: number;
    readonly affected_rows: number;
    readonly length: number;

    row(
        index: number
    ): object;
}
