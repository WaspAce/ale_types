declare class Mysql {
    constructor(object: {
        readonly host: string,
        readonly port: number,
        readonly user: string,
        readonly password: string,
        readonly database?: string
    })

    query(
        query_string: string
    ): MysqlResult;
}
