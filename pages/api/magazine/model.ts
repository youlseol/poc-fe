export interface Magazine {
  feedId: number;
  nickname: string;
  createdDatetime: string;
  profileUrl: string;
  likeCount: number;
  commentCount: number;
  feedTitle: string;
  contents: string;
  thumbnailFilePath: string;
  likeYn: string;
  bookmarkYn: string;
  memberUuid: string;
  previewContents: string;
  originalFilePath: string;
}

export interface MagazineDetail {
  magazine: Magazine;
  relatedFeeds: RelatedFeed[];
  relatedProducts: RelatedProduct[];
  relatedTags: RelatedTag[];
}

export interface RelatedFeed {
  feedId: number;
  feedTitle: string;
  feedTypeCode: string;
  nickname: string;
  thumbnailFilePath: string;
  originalFilePath: string;
}

export interface RelatedProduct {
  productId: number;
  productName: string;
  thumbnailFilePath: string;
  brandName: string;
  productModelName: string;
  originalFilePath: string;
}

export interface RelatedTag {
  tagId: number;
  tagName: string;
}

export interface RequestParameters {
  pageIndex?: number;
  pageSize?: number;
  sort?: string;
}
