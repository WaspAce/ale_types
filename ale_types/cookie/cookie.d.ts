declare class Cookie {
    name: string;
    value: string;
    domain: string;
    path: string;
    secure: boolean;
    httponly: boolean;
    creation: CefTime;
    last_access: CefTime;
    has_expires: boolean;
    expires: CefTime;
}
