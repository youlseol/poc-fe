'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import CustomCarousel from '@/components/common/CustomCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { RelatedFeed } from '@/pages/api/magazine/model';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function RelatedPosts({ relatedPosts }: { relatedPosts: RelatedFeed[] }) {
    const router = useRouter();
    const NEXT_PUBLIC_BUCKET_URL = String(process.env.NEXT_PUBLIC_BUCKET_URL);
    const clickHandler = useCallback(() => window.location.href=`javascript:window.ReactNativeWebView.postMessage(JSON.stringify({ type:'NAVIGATE_WITH_PARAM', payload: {screenName: 'MagazineScreen', param: {}}}))`,[]);

    const [ref] = useKeenSlider<HTMLDivElement>({
        //loop: true,
        mode: "free-snap",
        slides: {
          //origin: "center",
          perView: 2,
          spacing: 8,
        },
      })

    return (
        <>
            <h1 className="ml-5 my-3 inline-block text-2xl font-extrabold leading-tight text-slate-900 lg:text-5xl">관련 포스트</h1>
            {/* <CustomCarousel props={{showDots:false, slidesToSlide:3, responsive:{
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
                        items: 2,
                        partialVisibilityGutter: 10
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
                {relatedPosts.map((post, index) => (
                    <div key={post.feedId}>
                        <Link href="#" onClick={clickHandler}>
                            <Image
                                src={NEXT_PUBLIC_BUCKET_URL + post.thumbnailFilePath}
                                alt={post.feedTitle}
                                width={180}
                                height={180}
                                className="rounded-lg border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900 object-cover"
                            />
                            <p className="text-base font-extrabold text-slate-900 my-2 text-ellipsis">{post.feedTitle}</p>
                            <p className="text-base text-slate-900 text-ellipsis">{post.nickname}</p>
                        </Link>
                    </div>
                ))}
            </CustomCarousel> */}

            <div ref={ref} className="keen-slider">
            {relatedPosts.map((post, index) => (
                    <div key={post.feedId} className="keen-slider__slide">
                        <Link href="#" onClick={clickHandler}>
                            <Image
                                src={NEXT_PUBLIC_BUCKET_URL + post.thumbnailFilePath}
                                alt={post.feedTitle}
                                width={180}
                                height={180}
                                className="rounded-lg border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900 object-cover"
                            />
                            <p className="text-base font-extrabold text-slate-900 my-2 text-ellipsis">{post.feedTitle}</p>
                            <p className="text-base text-slate-900 text-ellipsis">{post.nickname}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
