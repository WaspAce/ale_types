declare class Extension {
    identifier: number;
    path: string;
    is_loaded: boolean;

    get_manifest(): DictionaryValue;
    is_same(that: Extension): boolean;
    get_loader_context(): RequestContext | null;
    unload(): void;
}
