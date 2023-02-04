import Back from '@/components/magazine/back';
import RelatedMagazines from '@/components/magazine/RelatedMagazines';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import { formatDate } from '@/lib/utils';
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
    const NEXT_PUBLIC_BUCKET_URL = String(process.env.NEXT_PUBLIC_BUCKET_URL); //how to get react-native component
    return (
        <>
            {magazineDetail?.magazine && <div dangerouslySetInnerHTML={createMarkup(magazineDetail?.magazine.contents)}></div>}
            <hr className="my-4 border-slate-200" />
            <RelatedMagazines
                relatedMagazines={
                    magazineDetail?.relatedFeeds.filter((value, _) => {
                        return value.feedTypeCode === FeedTypeCode.MAGAZINE;
                    }) || []
                }
            />
        </>
    );
}
