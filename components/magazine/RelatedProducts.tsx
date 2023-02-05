'use client';

import { useRouter } from 'next/navigation';
import CustomCarousel from '@/components/common/CustomCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { RelatedProduct } from '@/pages/api/magazine/model';

export default function RelatedProducts({ relatedProducts }: { relatedProducts: RelatedProduct[] }) {
    const router = useRouter();
    const NEXT_PUBLIC_BUCKET_URL = String(process.env.NEXT_PUBLIC_BUCKET_URL);

    return (
        <>
            <h1 className="ml-5 my-3 inline-block text-2xl font-extrabold leading-tight text-slate-900 lg:text-5xl">관련 제품</h1>
            <CustomCarousel props={{showDots:false, responsive:{
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
                        partialVisibilityGutter: 20
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
                {relatedProducts.map((product, index) => (
                    <div key={product.productId}>
                        <Link
                            href={`javascript:window.ReactNativeWebView.postMessage(JSON.stringify({ type:'NAVIGATE_WITH_PARAM', payload: {screenName: 'MagazineScreen', param: {}}}))`}
                        >
                            <Image
                                src={NEXT_PUBLIC_BUCKET_URL + product.thumbnailFilePath}
                                alt={product.productName}
                                width={180}
                                height={180}
                                className="rounded-lg border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                            />
                            <p className="text-base font-extrabold text-slate-900 my-2 text-ellipsis">{product.productName}</p>
                            <p className="text-sm text-slate-900 text-ellipsis">{product.brandName} | {product.productModelName}</p>
                        </Link>
                    </div>
                ))}
            </CustomCarousel>
        </>
    );
}
