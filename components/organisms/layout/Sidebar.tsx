import { VFC, memo, useContext } from 'react'
import { ContentfulContext } from '../../util/context'
import { useRecoilValue } from 'recoil'
import { postsState } from '../../util/state'

const Sidebar: VFC = () => {
  // const contentfulPostsData = (useContext(ContentfulContext)).contentfulData
  // const postsList = useContext(ContentfulContext).contentfulData
  const postsList = useRecoilValue(postsState)

  return (
    <div className="shadow-md">
      <p className="text-lg">サイドバー</p>
      {postsList && (
        <ul>
          {postsList.map((post: any) => (
            <li key={post.sys.id}>{post.fields.title}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default memo(Sidebar)
