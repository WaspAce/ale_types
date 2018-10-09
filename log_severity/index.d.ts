declare enum LogSeverity {
    /**
     * Default logging (currently INFO logging).
     */
    LOGSEVERITY_DEFAULT = 0,

    /**
     * Verbose logging.
     */
    LOGSEVERITY_VERBOSE = 1,

    /**
     * INFO logging.
     */
    LOGSEVERITY_INFO = 2,

    /**
     * WARNING logging.
     */
    LOGSEVERITY_WARNING = 3,

    /**
     * ERROR logging.
     */
    LOGSEVERITY_ERROR = 4,

    /**
     * Completely disable logging.
     */
    LOGSEVERITY_DISABLE = 99,
}
