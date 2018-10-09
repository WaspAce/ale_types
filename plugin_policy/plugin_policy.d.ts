/**
 * Plugin policies supported by [[RequestContextHandler]].on_before_plugin_load.
 */
declare enum PluginPolicy {
    /**
     * Allow the content.
     */
    PLUGIN_POLICY_ALLOW = 0,

    /**
     * Allow important content and block unimportant content based on heuristics.
     * The user can manually load blocked content.
     */
    PLUGIN_POLICY_DETECT_IMPORTANT = 0,

    /**
     * Block the content. The user can manually load blocked content.
     */
    PLUGIN_POLICY_BLOCK = 2,

    /**
     * Disable the content. The user cannot load disabled content.
     */
    PLUGIN_POLICY_DISABLE = 3
}
