/**
 * Resource type for a request.
 */
declare enum ResourceType {
    /**
     * Top level page.
     */
    RT_MAIN_FRAME = 0,

    /**
     * Frame or iframe.
     */
    RT_SUB_FRAME = 1,

    /**
     * CSS stylesheet.
     */
    RT_STYLESHEET = 2,

    /**
     * External script.
     */
    RT_SCRIPT = 3,

    /**
     * Image (jpg/gif/png/etc).
     */
    RT_IMAGE = 4,

    /**
     * 
     */
    RT_FONT_RESOURCE = 5,

    /**
     * Some other subresource. This is the default type if the actual type is
     * unknown.
     */
    RT_SUB_RESOURCE = 6,

    /**
     * Object (or embed) tag for a plugin, or a resource that a plugin requested.
     */
    RT_OBJECT = 7,

    /**
     * Media resource.
     */
    RT_MEDIA = 8,

    /**
     * Main resource of a dedicated worker.
     */
    RT_WORKER = 9,

    /**
     * Main resource of a shared worker.
     */
    RT_SHARED_WORKER = 10,

    /**
     * Explicitly requested prefetch.
     */
    RT_PREFETCH = 11,

    /**
     * Favicon.
     */
    RT_FAVICON = 12,

    /**
     * XMLHttpRequest.
     */
    RT_XHR = 13,

    /**
     * A request for a <ping>
     */
    RT_PING = 14,

    /**
     * Main resource of a service worker.
     */
    RT_SERVICE_WORKER = 15,

    /**
     * A report of Content Security Policy violations.
     */
    RT_CSP_REPORT = 16,

    /**
     * A resource that a plugin requested.
     */
    RT_PLUGIN_RESOURCE = 17
}
