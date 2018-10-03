declare class StringList {
    readonly count: number;
    get_value(index: number): string;
    add(value: string);
    clear();
    copy(): StringList;
}
