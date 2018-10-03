declare enum TransitionType {
    TT_LINK = 0,
    TT_EXPLICIT = 1,
    TT_AUTO_SUBFRAME = 3,
    TT_MANUAL_SUBFRAME = 4,
    TT_FORM_SUBMIT = 7,
    TT_RELOAD = 8,
    TT_SOURCE_MASK = 0xFF,
    TT_BLOCKED_FLAG = 0x00800000,
    TT_FORWARD_BACK_FLAG = 0x01000000,
    TT_CHAIN_START_FLAG = 0x10000000,
    TT_CHAIN_END_FLAG = 0x20000000,
    TT_CLIENT_REDIRECT_FLAG = 0x40000000,
    TT_SERVER_REDIRECT_FLAG = 0x80000000,
    TT_IS_REDIRECT_MASK = 0xC0000000,
    TT_QUALIFIER_MASK = 0xFFFFFF00
}
