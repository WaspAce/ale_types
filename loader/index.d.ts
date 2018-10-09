type ResolveHookCallback = (
    referrer: any,
    name: string
) => void;

declare class loader {
    static compile_module(
        name: string,
        code: string
    ): void;

    static eval_script(
        file_name: string,
        code: string,
    ): any;

    static load_from_file(
        path: string
    ): string;

    static path_exists(
        path: string
    ): boolean;

    static is_directory(
        path: string
    ): boolean;

    static fs_element_type(
        path: string
    ): FsElementType;

    static convert_to_system_path(
        path: string
    ): string;

    static set_module_resolve_hook(
        ResolveHookCallback,
    ): void;
}
