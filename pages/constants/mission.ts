export const MISSION_RESULT_COUNT = 10;

export enum MISSION_TYPE_PATH {
    ONGOING = 'ongoing',
    END = 'end',
    PARTICIPATE = 'participate',
    CORPORATE = 'corporate'
}

export enum MISSION_TYPE {
    PICTURE = 'PICTURE',
    SURVEY = 'SURVEY',
    COMMENT = 'COMMENT',
    COUPON = 'COUPON',
    RAFFLE = 'RAFFLE',
    RECOMMENDER = 'RECOMMENDER',
    STAMP = 'STAMP'
}

export enum MISSON_STATUS {
    NONE = 'NONE',
    PARTICIPATING = 'PARTICIPATING',
    COMPLETED = 'COMPLETED'
}

export enum MISSION_INFO_TYPE {
    NONE = 'NONE',
    PHONE = 'PHONE',
    PHONE_ADDRESS = 'PHONE_ADDRESS'
}

export enum SURVEY_MODAL_TYPE {
    LEVEL = 'LEVEL',
    BADGE = 'BADGE',
    COMPLETED = 'COMPLETED',
    MODIFY_PRIVACY_CHECK = 'MODIFY_PRIVACY_CHECK',
    END = 'END',
    CHANGE_COMPLETE = 'CHANGE_COMPLETE'
}

export enum MISSION_EXCEPTION {
    MISSION_PARTICIPANTION_INFO_ERR = 'MISSION_PARTICIPANTION_INFO_ERR',
    MISSION_LEVEL_ERR = 'MISSION_LEVEL_ERR',
    MISSION_BADGE_ERR = 'MISSION_BADGE_ERR',
    MISSION_DUPULICATE_ERR = 'MISSION_DUPULICATE_ERR',
    MISSION_COUPON_EXHAUSTED = 'MISSION_COUPON_EXHAUSTED',
    MISSION_NOT_WON = 'MISSION_NOT_WON',
    MISSION_PARTICIPATION_DATE_ERR = 'MISSION_PARTICIPATION_DATE_ERR'
}
