declare class MenuModel {
    readonly is_sub_menu: boolean;
    readonly count: number;

    clear(): boolean;

    add_separator(): boolean;

    add_item(
        command_id: MenuId,
        label: string
    ): boolean;

    add_check_item(
        command_id: MenuId,
        label: string
    ): boolean;

    add_radio_item(
        command_id: MenuId,
        label: string,
        group_id: number
    ): boolean;

    add_sub_menu(
        command_id: MenuId,
        label: string
    ): MenuModel;

    insert_separator_at(
        index: number
    ): boolean;

    insert_item_at(
        index: number,
        command_id: MenuId,
        label: string
    ): boolean;

    insert_check_item_at(
        index: number,
        command_id: MenuId,
        label: string
    ): boolean;

    insert_radio_item_at(
        index: number,
        command_id: MenuId,
        label: string,
        group_id: number
    ): boolean;

    insert_sub_menu_at(
        index: number,
        command_id: MenuId,
        label: string
    ): MenuModel;

    remove(
        command_id: MenuId
    ): boolean;

    get_index_of(
        command_id: MenuId
    ): number;

    get_command_id_at(
        index: number
    ): MenuId | number;

    set_command_id_at(
        index: number,
        command_id: MenuId
    ): boolean;

    get_label(
        command_id: MenuId
    ): string;

    get_label_at(
        index: number
    ): string;

    set_label(
        command_id: MenuId,
        label: string
    ): boolean;

    set_label_at(
        index: number,
        label: string
    ): boolean;

    get_type(
        command_id: MenuId
    ): MenuItemType;

    get_type_at(
        index: number
    ): MenuItemType;

    get_group_id(
        command_id: MenuId
    ): MenuId;

    get_group_id_at(
        index: number
    ): MenuId;

    set_group_id(
        command_id: MenuId,
        group_id: MenuId
    ): boolean;

    set_group_id_at(
        index: number,
        group_id: MenuId
    ): boolean;

    get_sub_menu(
        command_id: MenuId
    ): MenuId;

    get_submenu_at(
        index: number
    ): MenuId;

    is_visible(
        command_id: MenuId
    ): boolean;

    is_visible_at(
        index: number
    ): boolean;

    set_visible(
        command_id: MenuId,
        visible: boolean
    ): boolean;

    set_visible_at(
        index: number,
        visible: boolean
    ): boolean;

    is_enabled(
        command_id: MenuId
    ): boolean;

    is_enabled_at(
        index: number
    ): boolean;

    set_enabled(
        command_id: MenuId,
        enabled: boolean
    ): boolean;

    set_enabled_at(
        index: number,
        enabled: boolean
    ): boolean;

    is_checked(
        command_id: MenuId
    ): boolean;

    is_checked_at(
        index: number
    ): boolean;

    set_checked(
        command_id: MenuId,
        checked: boolean
    ): boolean;

    set_checked_at(
        index: number,
        checked: boolean
    ): boolean;

    has_accelerator(
        command_id: MenuId
    ): boolean;

    has_accelerator_at(
        index: number
    ): boolean;

    set_accelerator(
        command_id: MenuId,
        key_code: number,
        shift_pressed: boolean,
        ctrl_pressed: boolean,
        alt_pressed: boolean
    ): boolean;

    set_accelerator_at(
        index: number,
        key_code: number,
        shift_pressed: boolean,
        ctrl_pressed: boolean,
        alt_pressed: boolean
    ): boolean;

    remove_accelerator(
        command_id: MenuId
    ): boolean;

    remove_accelerator_at(
        index: number
    ): boolean;

    get_accelerator(
        command_id: MenuId
    ): {
        key_code: number,
        shift_pressed: boolean,
        ctrl_pressed: boolean,
        alt_pressed: boolean
    };

    get_accelerator_at(
        index: number
    ): {
        key_code: number,
        shift_pressed: boolean,
        ctrl_pressed: boolean,
        alt_pressed: boolean
    };

    set_color(
        command_id: MenuId,
        color_type: MenuColorType,
        color: string
    ): boolean;

    set_color_at(
        index: number,
        color_type: MenuColorType,
        color: string
    ): boolean;

    get_color(
        command_id: MenuId
    ): {
        color_type: MenuColorType,
        color: string
    };

    get_color_at(
        index: number
    ): {
        color_type: MenuColorType,
        color: string
    };

    set_font_list(
        command_id: MenuId,
        font_list: string
    ): boolean;

    set_font_list_at(
        index: number,
        font_list: string
    ): boolean;
}
