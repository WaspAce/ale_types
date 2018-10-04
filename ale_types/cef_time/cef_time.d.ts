declare class CefTime {
    constructor(date?: Date)

    year: number;
    month: number;
    day_of_week: number;
    day_of_month: number;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;

    as_date(date?: Date): Date;
    set_epoch_milliseconds(milliseconds: number): void;
}

