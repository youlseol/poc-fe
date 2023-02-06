'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { RelatedProduct } from '@/pages/api/magazine/model';

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '@/styles/carousel.css';

export default function RelatedProducts({ relatedProducts }: { relatedProducts: RelatedProduct[] }) {
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
            <h1 className="ml-5 my-3 inline-block text-2xl font-extrabold leading-tight text-slate-900 lg:text-5xl">관련 제품</h1>
            <div ref={ref} className="keen-slider pl-4 mb-8">
            {relatedProducts.map((product, index) => (
                    <div key={product.productId} className="keen-slider__slide">
                        <Link href="#" onClick={clickHandler}>
                            <Image
                                src={NEXT_PUBLIC_BUCKET_URL + product.thumbnailFilePath}
                                alt={product.productName}
                                width={180}
                                height={180}
                                className="carousel_half rounded-lg border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                            />
                            <p className="text-base font-extrabold text-slate-900 my-2 text-ellipsis">{product.productName}</p>
                            <p className="text-sm text-slate-900 text-ellipsis">{product.brandName} | {product.productModelName}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}
