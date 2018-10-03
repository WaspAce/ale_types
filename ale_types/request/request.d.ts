// @ts-ignore
declare class Request {
    readonly is_read_only: boolean;
    url: string;
    method: string;
    referrer_url: string;
    referrer_policy: ReferrerPolicy;
    flags: UrlRequestFlags[];
    first_party_for_cookies: string;
    resource_type: ResourceType;
    transition_type: TransitionType;
    identifier: number;

    set_referrer(referrer_url: string, policy: ReferrerPolicy);
    get_header_map(header_map: StringMultimap);
    set_header_map(header_map: StringMultimap);
    get_post_data(): PostData;
    set_post_data(): PostData;
}
