/**
 * Process termination status values.
 */
declare enum TerminationStatus {
    /**
     * Non-zero exit status.
     */
    TS_ABNORMAL_TERMINATION = 0,

    /**
     * SIGKILL or task manager kill.
     */
    TS_PROCESS_WAS_KILLED = 1,

    /**
     * Segmentation fault.
     */
    TS_PROCESS_CRASHED = 2,

    /**
     * Out of memory. Some platforms may use TS_PROCESS_CRASHED instead.
     */    
    TS_PROCESS_OOM = 3,
}
