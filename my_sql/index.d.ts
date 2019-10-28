declare class MySql {
    constructor(options: {
        readonly host: string,
        readonly port: number,
        readonly user: string,
        readonly password: string,
        readonly database?: string
    })

    query(
        query_string: string
    ): MySqlResult;
}
