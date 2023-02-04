export enum MemberTypeCode {
    MEMBER = 'MEMBER',
    TEMP_MEMBER = 'TEMP_MEMBER'
}

export enum SocialTypeCode {
    NAVER = 'NAVER',
    KAKAO = 'KAKAO',
    APPLE = 'APPLE',
    GOOGLE = 'GOOGLE',
    EMAIL = 'EMAIL'
}

export enum SuccessOrNot {
    Y = 'Y',
    N = 'N'
}

export enum StatusCode {
    INVALID_EMAIL_FORMAT = 'INVALID_EMAIL_FORMAT',
    INCORRECT_USERNAME_OR_PASSWORD = 'INCORRECT_USERNAME_OR_PASSWORD',
    WITHDRAWAL = 'WITHDRAWAL',
    HALT = 'HALT',
    DORMANT = 'DORMANT',
    FORCED_WITHDRAWAL = 'FORCED_WITHDRAWAL',
    UNKNOWN_ERROR = 'UNKNOWN.ERROR',
    EXIST_DUPLICATION_EMAIL = 'EXIST_DUPLICATION_EMAIL',
    LOCK = 'LOCK'
}

export enum ShowReportModalType {
    NONE = 'NONE',
    REPORT = 'REPORT',
    REPORT_CONFIRM = 'REPORT_CONFIRM'
}

export enum MemberStateCode {
    WITHDRAWAL = 'WITHDRAWAL',
    HALT = 'HALT',
    DORMANT = 'DORMANT',
    FORCED_WITHDRAWAL = 'FORCED_WITHDRAWAL',
    NORMAL = 'NORMAL'
}
