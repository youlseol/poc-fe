export enum CommentTypeCode {
    POST = 'POST',
    MISSION = 'MISSION',
    MAGAZINE = 'MAGAZINE',
    QNA = 'QNA',
    AB = 'AB',
    PRODUCT = 'PRODUCT'
}

export enum CommentStatusCode {
    REGISTERED = 'REGISTERED',
    ADMIN_DELETE = 'ADMIN_DELETE',
    USER_DELETE = 'USER_DELETE'
}

export enum LikeStatus {
    LIKE_COMPLETE,
    LIKE_ING,
    LIKE_FAIL,
    CANCEL_COMPLETE,
    CANCEL_ING,
    CANCEL_FAIL
}
