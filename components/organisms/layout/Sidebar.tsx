import { VFC, memo, useContext } from 'react'
import { ContentfulContext } from '../../util/context'
import { useRecoilValue } from 'recoil'
import { postsState } from '../../util/state'
import Link from 'next/link'

const Sidebar: VFC = () => {
  // const contentfulPostsData = (useContext(ContentfulContext)).contentfulData
  // const postsList = useContext(ContentfulContext).contentfulData
  const postsList = useRecoilValue(postsState)

  return (
    <div className="shadow-md p-4">
      <p className="text-lg mb-6">サイドバー</p>
      {postsList && (
        <ul>
          {postsList.map((post: any, index) => (
            <li key={post.sys.id} className={`${index && 'mt-3'}`}>
              <Link href={`/posts/${post.fields.slug}`}>
                <a className="block">
                  <div>
                    <p className="text-sm font-bold">{post.fields.title}</p>
                    <p className="mt-1 text-xs text-gray-500">
                      {post.fields.category.fields.name}
                    </p>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default memo(Sidebar)
