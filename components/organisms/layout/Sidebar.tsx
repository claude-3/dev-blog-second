import { VFC, memo, useContext } from 'react'
import { ContentfulContext } from '../../util/context'
import { useRecoilValue } from 'recoil'
import { postsState } from '../../util/state'
import Link from 'next/link'

const Sidebar: VFC = () => {
  const postsList = useRecoilValue(postsState)

  return (
    <div className="p-4">
      {postsList && (
        <div className="">
          <p className="text-title text-lg border-b-4 border-myOrange">
            新着記事
          </p>
          <ul className="py-4">
            {postsList.map((post: any, index) => (
              <li
                key={post.sys.id}
                className={`${index && 'mt-3 pt-3 border-t border-myGray'}`}
              >
                <Link href={`/posts/${post.fields.slug}`}>
                  <a className="block transform hover:translate-x-3">
                    <div>
                      <p className="text-xs text-mySecondary">
                        {new Date(post.fields.publishDate).toLocaleDateString()}
                      </p>
                      <p className="text-sm font-bold">{post.fields.title}</p>
                      <p className="mt-1 text-xs bg-myGray inline-block p-1">
                        {post.fields.category.fields.name}
                      </p>
                    </div>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default memo(Sidebar)
