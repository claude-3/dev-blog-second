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
    <div className="relative z-0">
      <div className="w-full h-full absolute top-2 left-2 bg-mySecondary"></div>
      <Link href={url}>
        <a className="group flex flex-col p-6 pb-6 bg-myWhite border border-mySecondary transform h-full hover:bg-mySecondary hover:text-myWhite hover:translate-x-2 hover:translate-y-2">
          <div className="">
            <p className="text-myPrimary group-hover:text-myWhite transition duration-500">
              {category}
            </p>
            <p className="text-title text-lg md:text-2xl text-myBrownGold">
              {title}
            </p>
            <p className="mt-4">{description}</p>
            <span className="absolute bottom-2 right-2 text-myBrown group-hover:text-myWhite transition duration-500">
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
          </div>
        </a>
      </Link>
    </div>
  )
}

export default memo(CardCate)
