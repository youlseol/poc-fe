'use client';

import { useRouter } from 'next/navigation';
import { useState, useCallback } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { RelatedFeed } from '@/pages/api/magazine/model';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '@/styles/carousel.css';

export default function RelatedMagazines({ relatedMagazines }: { relatedMagazines: RelatedFeed[] }) {
    const router = useRouter();
    const NEXT_PUBLIC_BUCKET_URL = String(process.env.NEXT_PUBLIC_BUCKET_URL);
    const clickHandler = useCallback(() => window.location.href=`javascript:window.ReactNativeWebView.postMessage(JSON.stringify({ type:'NAVIGATE_WITH_PARAM', payload: {screenName: 'MagazineScreen', param: {}}}))`,[]);
    
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
      //mode: "free-snap",
      initial: 0,
      slides: {
        origin: "center",
        perView: 1.1,
        spacing: 10,
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    })
    return (
        <>
            <h1 className="ml-5 my-3 inline-block text-2xl font-extrabold leading-tight text-slate-900 lg:text-5xl">관련 매거진</h1>
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider pl-1">
                {relatedMagazines.map((magazine, index) => (
                    <div className='keen-slider__slide' key={magazine.feedId}>
                        <Link href="#" onClick={clickHandler}>
                            <Image
                                src={NEXT_PUBLIC_BUCKET_URL + magazine.thumbnailFilePath}
                                alt={magazine.feedTitle}
                                width={360}
                                height={360}
                                //className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                className="rounded-lg border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                            />
                            <p className="text-base font-extrabold text-slate-900 my-2 truncate ...">{magazine.feedTitle}</p>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
            {loaded && instanceRef.current && (
                <div className="dots">
                {[
                    ...Array(instanceRef.current.track.details.slides.length).keys(),
                ].map((idx) => {
                    return (
                    <button
                        key={idx}
                        onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                        }}
                        className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                    )
                })}
                </div>
            )}
        </>
    );
}
