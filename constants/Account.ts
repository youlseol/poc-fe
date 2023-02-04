//import { AccountFeedItem } from '../api/account/model';

export const MY_HOME_FEED_COUNT = 36;
export const FOLLOWER_LIST_COUNT = 36;

export interface FeedUIList {
    sectionIndex: number;
    //data: AccountFeedItem[];
}

export const TAB_DATA = {
    sectionIndex: 0,
    data: []
};

export enum AccountFeedTypeCode {
    POST = 'posts',
    QNA = 'qnas',
    AB = 'abs',
    MAGAZINE = 'magazines',
    MISSION = 'missions'
}

export enum FollowersTab {
    FOLLOWERS = 'FOLLOWER',
    FOLLOWINGS = 'FOLLOWING'
}
