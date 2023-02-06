'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import CustomCarousel from '@/components/common/CustomCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { RelatedFeed } from '@/pages/api/magazine/model';

export default function RelatedMagazines({ relatedMagazines }: { relatedMagazines: RelatedFeed[] }) {
    const router = useRouter();
    const NEXT_PUBLIC_BUCKET_URL = String(process.env.NEXT_PUBLIC_BUCKET_URL);
    const clickHandler = useCallback(() => window.location.href=`javascript:window.ReactNativeWebView.postMessage(JSON.stringify({ type:'NAVIGATE_WITH_PARAM', payload: {screenName: 'MagazineScreen', param: {}}}))`,[]);

    return (
        <>
            <h1 className="ml-5 my-3 inline-block text-2xl font-extrabold leading-tight text-slate-900 lg:text-5xl">관련 매거진</h1>
            <CustomCarousel props={{showDots:true, responsive:{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 6,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 40
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
                        partialVisibilityGutter: 30
                    }
                }}}>
                {relatedMagazines.map((magazine, index) => (
                    <div key={magazine.feedId}>
                        <Link href="#" onClick={clickHandler}>
                            <Image
                                src={NEXT_PUBLIC_BUCKET_URL + magazine.thumbnailFilePath}
                                alt={magazine.feedTitle}
                                width={340}
                                height={340}
                                //className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                className="rounded-lg border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                            />
                            <p className="text-base font-extrabold text-slate-900 my-2 truncate ...">{magazine.feedTitle}</p>
                        </Link>
                    </div>
                ))}
            </CustomCarousel>
        </>
    );
}
