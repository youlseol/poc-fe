'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RelatedTag } from '@/pages/api/magazine/model';
import styles from '@/styles/tag.module.css';

export default function MagazineTags({ relatedTags }: { relatedTags: RelatedTag[] }) {
    const router = useRouter();

    return (
        <>
            <div className="flex max-w-lg flex-wrap">
                {relatedTags.map((tag, index) => (
                        <div key={tag.tagId} className={`mt-2 mr-3 ${styles.tag_common}`}>
                            <Link className='mr-3 text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
                                href={`javascript:window.ReactNativeWebView.postMessage(JSON.stringify({ type:'NAVIGATE_WITH_PARAM', payload: {screenName: 'MagazineScreen', param: {}}}))`}
                            >
                                #{tag.tagName}
                            </Link>
                        </div>
                    ))}
            </div>
        </>
    );
}
