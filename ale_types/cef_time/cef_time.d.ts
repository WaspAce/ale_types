/**
 * Time information. Values should always be in UTC.
 */
declare class CefTime {
    constructor(date?: Date)

    /**
     * Four or five digit year "2007" (1601 to 30827 on
     * Windows, 1970 to 2038 on 32-bit POSIX)
     */
    year: number;

    /**
     * 1-based month (values 1 = January, etc.)
     */
    month: number;

    /**
     * 0-based day of week (0 = Sunday, etc.)
     */
    day_of_week: number;

    /**
     * 1-based day of month (1-31)
     */
    day_of_month: number;

    /**
     * Hour within the current day (0-23)
     */
    hour: number;

    /**
     * Minute within the current hour (0-59)
     */
    minute: number;

    /**
     * Second within the current minute (0-59 plus leap
     * seconds which may take it up to 60).
     */
    second: number;

    /**
     * Milliseconds within the current second (0-999)
     */
    millisecond: number;

    /**
     * Apply **date** if any to the CefTime.
     * @returns CefTime converted to date.
     */
    as_date(date?: Date): Date;

    /**
     * Convert epoch milliseconds to the CefTime. 
     * @param milliseconds Milliseconds elapsed since timestamp of unix epoch counting from 1 January 1970.
     */
    set_epoch_milliseconds(milliseconds: number): void;
}

