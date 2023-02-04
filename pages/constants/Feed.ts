import { FeedFileForUploadS3 } from '../api/post/model';
import { BucketTypeCode } from './File';

export enum FeedTypeCode {
    POST = 'POST',
    QNA = 'QNA',
    AB = 'AB',
    PRODUCT = 'PRODUCT',
    MAGAZINE = 'MAGAZINE'
}

export enum PostMainTypeCode {
    RECENT = 'RECENT',
    POPULAR = 'POPULAR',
    FOLLOWING = 'FOLLOWING'
}

export enum UploadTypeCode {
    POST = 'FEED/POST',
    QNA = 'FEED/QNA',
    AB = 'FEED/AB',
    PRODUCT = 'FEED/PRODUCT',
    NEW_PRODUCT = 'PRODUCT'
}

export enum FeedTypePath {
    POST = 'posts',
    QNA = 'qnas',
    AB = 'abs',
    PRODUCT = 'products'
}

export enum FeedMode {
    WRITE,
    MODIFY
}

export const FEED_TAG_SEARCH_COUNT = 10;

export const POST_BLANK_FILE = {
    originalFileName: '',
    fileName: '',
    filePath: '',
    fileSize: -1,
    fileType: '',
    fileExtension: '',
    thumbnailYn: 'N'
};

export const POST_BLANK_CONTENTS = {
    bucketTypeCode: BucketTypeCode.PUBLIC,
    uploadTypeCode: UploadTypeCode.POST,
    files: [POST_BLANK_FILE],
    content: ''
};

export const POST_BLANK = {
    title: '',
    contents: [POST_BLANK_CONTENTS],
    tagNames: [],
    products: []
};

export const MAX_CONTENTS_LENGTH = 60;

export const FEED_CALL_STATE = {
    MAIN_POPULAR: 'mainPopular',
    MY_HOME: 'myhome',
    POPULAR: 'popular',
    RECENT: 'recent',
    FOLLOWING: 'following',
    SEARCH_POST: 'searchPost',
    SEARCH_QNA: 'searchQna',
    TAG: 'tag',
    PRODUCT_REALPOST: 'realPost',
    PRODUCT_QNA: 'qna',
    PRODUCT_USE_METHOD: 'useMethodPost',
    MISSION: 'mission'
};

export const POST_MODIFY_BLANK = {
    feedId: 0,
    title: '',
    contents: [],
    tags: []
};

export const POST_MODIFY_BLANK_CONTENTS = {
    feedId: -1,
    bucketTypeCode: BucketTypeCode.PUBLIC,
    uploadTypeCode: UploadTypeCode.POST,
    files: [POST_BLANK_FILE],
    contents: ''
};

export const BLANK_TEMP_FILE: FeedFileForUploadS3 = {
    contentIndex: -1,
    fileIndex: -1,
    signedPath: '',
    filePath: '',
    thumbPath: '',
    type: 'IMAGE'
};

export const QNA_BLANK = {
    title: '',
    content: '',
    files: [POST_BLANK_FILE],
    tagNames: [],
    reviewRequestMemberUuids: [],
    products: []
};

export const FEED_STATUS_CODE = {
    POSTED: 'POSTED',
    DELETEDL: 'DELETED',
    BLOCKED: 'BLOCKED'
};

export const SORT = {
    DATE: 'date',
    POPULARITY: 'popularity'
};
