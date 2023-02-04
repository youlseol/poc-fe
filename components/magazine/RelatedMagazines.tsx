'use client';

import { useRouter } from 'next/navigation';

import CustomCarousel from '@/components/common/CustomCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { RelatedFeed } from '@/pages/api/magazine/model';

export default function RelatedMagazines({ relatedMagazines }: { relatedMagazines: RelatedFeed[] }) {
    const router = useRouter();
    const NEXT_PUBLIC_BUCKET_URL = String(process.env.NEXT_PUBLIC_BUCKET_URL);

    return (
        <>
            <h1 className="mt-2 inline-block text-2xl font-extrabold leading-tight text-slate-900 lg:text-5xl">관련 매거진</h1>
            <CustomCarousel>
                {relatedMagazines.map((magazine, index) => (
                    <div className="relative flex flex-row space-x-2 mx-2 my-2" key={magazine.feedId}>
                        <Link
                            href={`javascript:window.ReactNativeWebView.postMessage(JSON.stringify({ type:'NAVIGATE_WITH_PARAM', payload: {screenName: 'MagazineScreen', param: {}}}))`}
                        >
                            <Image
                                src={NEXT_PUBLIC_BUCKET_URL + magazine.thumbnailFilePath}
                                alt={magazine.feedTitle}
                                width={300}
                                height={300}
                                //className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                className="rounded-lg border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                            />
                            <p className="text-base font-extrabold text-slate-900 my-2">{magazine.feedTitle}</p>
                        </Link>
                    </div>
                ))}
            </CustomCarousel>
        </>
    );
}
