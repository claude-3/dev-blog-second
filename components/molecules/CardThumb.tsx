import { VFC, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  slug: string
  imgUrl: string
  imgAlt: string
  imgW: string
  imgH: string
  publishDate: string
  title: string
  category: string
  indexFirst: boolean
}

const CardThumb: VFC<Props> = (props) => {
  const {
    slug,
    imgUrl,
    imgAlt,
    imgW,
    imgH,
    publishDate,
    title,
    category,
    indexFirst = false,
  } = props
  return (
    <div className="h-full">
      <Link href={`/posts/${slug}`}>
        <a className="block h-full md:transform hover:translate-y-2 hover:translate-x-2">
          <div className="overflow-hidden rounded-md  h-full">
            <div className="">
              <Image src={imgUrl} alt={imgAlt} width={imgW} height={imgH} />
            </div>
            <div className="p-1 h-full">
              <p className="tracking-wider mb-1 text-myNavy">
                {indexFirst && (
                  <span className="tracking-tight text-myOrange mr-2 border border-myOrange px-1">
                    NEW
                  </span>
                )}
                {publishDate}
              </p>
              <p className="text-title text-lg mb-3">{title}</p>
              <p className="py-1 px-2 text-center rounded bg-myGray text-xs font-medium tracking-widest">
                {category}
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default memo(CardThumb)
