import { VFC, memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  path: string
  title: string
  publishDate: string
  desc?: string
  imgUrl: string
  imgAlt: string
}
const CardPost: VFC<Props> = (props) => {
  const { path, title, desc, imgUrl, imgAlt = '', publishDate } = props
  const date = new Date(publishDate).toLocaleDateString()

  return (
    <Link href={path}>
      <a className="flex">
        <Image src={imgUrl} width={150} height={60} alt={imgAlt} />
        <div className="p-2 w-full">
          <p className="font-bold">{title}</p>
          <p>{date}</p>
        </div>
      </a>
    </Link>
  )
}

export default memo(CardPost)
