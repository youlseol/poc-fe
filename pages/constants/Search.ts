export enum SearchTabMenu {
    Main = 'main',
    Product = 'product',
    Post = 'post',
    Poster = 'poster',
    Qna = 'qna',
    Tag = 'tag',
    Total = 'total'
}

export enum SearchSortType {
    LATEST = 'dateDESC',
    POPULAR = 'popularityDESC',
    ACCURACY = 'accuracyDESC'
}

export enum AutoCompleteWhat {
    DEFAULT = 'default',
    PRODUCT = 'product'
}

export const SEARCH_RESULT_COUNT = 10;

export const BLANK_TOTAL_RESULT = {
    productList: [],
    productCount: 0,
    postList: [],
    postCount: 0,
    qnaList: [],
    qnaCount: 0,
    posterList: [],
    posterCount: 0,
    tagList: [],
    tagCount: 0
};
