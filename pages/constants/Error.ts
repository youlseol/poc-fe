export const ErrorCode = {
    HAS_BAD_WORD: { code: 'HAS_BAD_WORD', message: 'screen.post.message.tagValidError' },
    HAS_BLOCKED_TAG: { code: 'HAS_BLOCKED_TAG', message: 'screen.post.message.invalidTag' },
    FEED_IS_NOT_POSTED: { code: 'FEED_IS_NOT_POSTED', message: 'common.message.blockedOrDeleted' },
    CREATED_MEMBER_STATE_IS_NOT_NORMAL: {
        code: 'CREATED_MEMBER_STATE_IS_NOT_NORMAL',
        message: 'screen.qna.message.invalidMember'
    },
    FEED_ID_NOT_EXIST: {
        code: 'FEED_ID_NOT_EXIST',
        message: 'common.message.blockedOrDeleted'
    },
    PARAM_LENGTH_ERR: {
        code: 'PARAM_LENGTH_ERR',
        message: 'common.error.lengthLimit.title' // 제목
    }
};
