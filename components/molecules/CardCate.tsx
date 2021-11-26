import { memo, VFC } from 'react'
import Link from 'next/link'

type Props = {
  category: string
  url: string
  title: string
  description: string
}
const CardCate: VFC<Props> = (props) => {
  const { category, url, title, description } = props
  return (
    <>
      <Link href={url}>
        <a className="relative flex flex-col p-4 pb-6 bg-white shadow transform hover:scale-105 border-t-4 border-myBrownGold rounded">
          <p className="text-myNavy">{category}</p>
          <p className="text-title text-lg md:text-2xl">{title}</p>
          <p className="mt-4">{description}</p>
          <span className="absolute bottom-2 right-2 text-myBrownGold">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>
        </a>
      </Link>
    </>
  )
}

export default memo(CardCate)
