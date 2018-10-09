/**
 * Policy for how the Referrer HTTP header value will be sent during navigation.
 */
declare enum ReferrerPolicy {
    /**
     * Clear the referrer header if the header value is HTTPS but the request
     * destination is HTTP. This is the default behavior.
     */
    REFERRER_POLICY_CLEAR_REFERRER_ON_TRANSITION_FROM_SECURE_TO_INSECURE = 0,

    /**
     * A slight variant on CLEAR_REFERRER_ON_TRANSITION_FROM_SECURE_TO_INSECURE:
     * If the request destination is HTTP, an HTTPS referrer will be cleared. If
     * the request's destination is cross-origin with the referrer (but does not
     * downgrade), the referrer's granularity will be stripped down to an origin
     * rather than a full URL. Same-origin requests will send the full referrer.
     */
    REFERRER_POLICY_REDUCE_REFERRER_GRANULARITY_ON_TRANSITION_CROSS_ORIGIN = 1,

    /**
     * Strip the referrer down to an origin when the origin of the referrer is
     * different from the destination's origin.
     */
    REFERRER_POLICY_ORIGIN_ONLY_ON_TRANSITION_CROSS_ORIGIN = 2,

    /**
     * Never change the referrer.
     */
    REFERRER_POLICY_NEVER_CLEAR_REFERRER = 3,

    /**
     * Strip the referrer down to the origin regardless of the redirect location.
     */
    REFERRER_POLICY_ORIGIN = 4,

    /**
     * Clear the referrer when the request's referrer is cross-origin with the
     * request's destination.
     */
    REFERRER_POLICY_CLEAR_REFERRER_ON_TRANSITION_CROSS_ORIGIN = 5,

    /**
     * Strip the referrer down to the origin, but clear it entirely if the
     * referrer value is HTTPS and the destination is HTTP.
     */
    REFERRER_POLICY_ORIGIN_CLEAR_ON_TRANSITION_FROM_SECURE_TO_INSECURE = 6,

    /**
     * Always clear the referrer regardless of the request destination.
     */
    REFERRER_POLICY_NO_REFERRER = 7,

    /**
     * Always the last value in this enumeration.
     */
    REFERRER_POLICY_LAST_VALUE = 8
}