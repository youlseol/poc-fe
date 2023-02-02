import Back from '@/components/magazine/back'
import Image from "next/image"
import Link from "next/link"
import { Icons } from "@/components/icons"
import { formatDate } from "@/lib/utils"
import {getMagazineDetail} from '@/pages/api/magazine/api'
import {MagazineDetail} from '@/pages/api/magazine/model'


async function getMagazine(id : string): Promise<MagazineDetail | null> {
  try {
    const magazine = await getMagazineDetail(id);
    return magazine;
  } catch (error) {
    return null
  }
}
function createMarkup(c : string) {
  return { __html: c };
}

export default async function Page({params}: {params: { id: string }}) {
  const detail = await getMagazine(params.id);
  const PUBLIC_BUCKET_URL = String(process.env.REACT_PUBLIC_BUCKET_URL);
  return (
<article className="container relative max-w py-6 lg:py-10">
<Link
  href="/magazine"
  className="absolute top-14 -left-[150px] hidden items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 xl:inline-flex"
>
  <Icons.chevronLeft className="mr-2 h-4 w-4" />
  See all magazines
</Link>
<div>
  {detail?.magazine.createdDatetime && (
    <time dateTime={detail?.magazine.createdDatetime} className="block text-sm text-slate-600">
      Published on {formatDate(detail?.magazine.createdDatetime)}
    </time>
  )}
  <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
    {detail?.magazine.feedTitle}
  </h1>
  {detail?.magazine? (
          <div className="mt-4 flex space-x-4">
              <Link
                key={detail?.magazine.memberUuid}
                href={`https://www.220cordncode.com/`}
                className="flex items-center space-x-2 text-sm"
              >
                <Image
                  src={PUBLIC_BUCKET_URL+detail?.magazine.profileUrl}
                  alt={detail?.magazine.nickname}
                  width={42}
                  height={42}
                  className="rounded-full"
                />
                <div className="flex-1 text-left leading-tight">
                  <p className="font-medium text-slate-900">{detail?.magazine.nickname}</p>
                  {/* <p className="text-[12px] text-slate-600">
                    @{author.twitter}
                  </p> */}
                </div>
              </Link>
          </div>
        ) : null}
  </div>
  <hr className="my-4 border-slate-200" />
    {detail?.magazine && <div dangerouslySetInnerHTML={createMarkup(detail?.magazine.contents)}></div>}
      <hr className="my-4 border-slate-200" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/magazine"
          className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          See all magazines
        </Link>
      </div>
    </article>
  )
}