'use client';

import { RelatedFeed } from '@/pages/api/magazine/model';
import { useRouter } from 'next/navigation';

export default function RelatedPosts(relatedPosts: RelatedFeed[]) {
    const router = useRouter();

    return (
        <>
            <button onClick={router.back}>뒤로가기</button>
        </>
    );
}
