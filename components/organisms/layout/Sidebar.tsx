import { VFC, memo, useContext } from 'react'
import { ContentfulContext } from '../../util/context'
import { useRecoilValue } from 'recoil'
import { postsState } from '../../util/state'

const Sidebar: VFC = () => {
  // const contentfulPostsData = (useContext(ContentfulContext)).contentfulData
  // const postsList = useContext(ContentfulContext).contentfulData
  const postsList = useRecoilValue(postsState)

  return (
    <aside className="hidden lg:block lg:w-80 ml-14 min-h-{50vh} shadow">
      <p className="text-lg">サイドバー</p>
      {postsList && (
        <ul>
          {postsList.map((post: any) => (
            <li key={post.sys.id}>{post.fields.title}</li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default memo(Sidebar)
