import RelatedMagazines from '@/components/magazine/RelatedMagazines';
import RelatedPosts from '@/components/magazine/RelatedPosts';
import RelatedProducts from '@/components/magazine/RelatedProducts';
import MagazineTags from '@/components/magazine/MagazineTags';

import { getMagazineDetail } from '@/pages/api/magazine/api';
import { MagazineDetail } from '@/pages/api/magazine/model';
import { FeedTypeCode } from '@/constants/Feed';

async function getMagazine(id: string): Promise<MagazineDetail | null> {
    try {
        const magazine = await getMagazineDetail(id);
        return magazine;
    } catch (error) {
        return null;
    }
}
function createMarkup(c: string) {
    return { __html: c };
}

export default async function Page({ params }: { params: { id: string } }) {
    const magazineDetail = await getMagazine(params.id);

    const relatedMagazines = magazineDetail?.relatedFeeds.filter((value, _) => { return value.feedTypeCode === FeedTypeCode.MAGAZINE; }) || [];
    const relatedPosts = magazineDetail?.relatedFeeds.filter((value, _) => { return value.feedTypeCode === FeedTypeCode.POST; }) || [];

    return (
        <>
            {magazineDetail?.magazine && <div dangerouslySetInnerHTML={createMarkup(magazineDetail?.magazine.contents)}></div>}
            {magazineDetail?.relatedTags && magazineDetail?.relatedTags.length > 0 && <MagazineTags relatedTags={magazineDetail?.relatedTags || []} />}
            <hr className="my-4 border-slate-200" />
            {relatedMagazines.length > 0 && <RelatedMagazines relatedMagazines={relatedMagazines} />}
            {relatedPosts.length > 0 && <RelatedPosts relatedPosts={relatedPosts} />}
            {magazineDetail?.relatedProducts && magazineDetail?.relatedProducts.length > 0 && <RelatedProducts
                relatedProducts={magazineDetail?.relatedProducts || []
                }
            />}
        </>
    );
}
