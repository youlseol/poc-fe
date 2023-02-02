import { Suspense } from "react";
import Link from 'next/link'
import Image from "next/image"
import {getMagazineList} from '@/pages/api/magazine/api'
import {Magazine} from '@/pages/api/magazine/model'


async function getMagazines(): Promise<Magazine[] | null> {
  try {
    const magazines = await getMagazineList();
    return magazines;
  } catch (error) {
    return null
  }
}

export default async function Page() {
  const magazines = await getMagazines();
  const PUBLIC_BUCKET_URL = String(process.env.REACT_PUBLIC_BUCKET_URL);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
            Magazine
          </h1>
          <p className="text-xl text-slate-600">
            최신
          </p>
        </div>
      </div>
      <hr className="my-8 border-slate-200" />
      {magazines?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {magazines.map((magazine, index) => (
            <article
              key={magazine.feedId}
              className="group relative flex flex-col space-y-2"
            >
              {magazine.thumbnailFilePath && (
                <Image
                  src={PUBLIC_BUCKET_URL+magazine.thumbnailFilePath}
                  alt={magazine.feedTitle}
                  width={804}
                  height={452}
                  className="rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
                  priority={index <= 1}
                />
              )}
              {/* <h2 className="text-2xl font-extrabold">{magazine.feedTitle}</h2>
              {post.description && (
                <p className="text-slate-600">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-slate-600">
                  {formatDate(post.date)}
                </p>
              )} */}
              <Link href={`/magazine/${magazine.feedId}`} className="absolute inset-0">
                <span className="sr-only">View Magazine</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No magazines published.</p>
      )}
    </div>
  )
}