import { useState } from 'react'
import type { NextPage } from 'next'
import useSWR from 'swr'

import Layout from '../components/templates/Layout'
import CardPost from '../components/molecules/CardPost'
import {
  getAllPostsData,
  getNewPostsData,
  getTotalPostsNumber,
} from '../lib/posts'

const fetcher = (limit: number, page: number) => {
  const skip = limit * (page - 1)
  return getNewPostsData(limit, skip)
}

const Blog: NextPage<any> = ({ total }) => {
  const [postLimit, setPostLimit] = useState(2)
  const [postPage, setPostPage] = useState(1)
  const { data, error } = useSWR([postLimit, postPage], fetcher)
  const pagiNationTotal = Math.floor(total / postLimit)

  const changePostsLimit = (num: number) => {
    setPostLimit(num)
  }

  const changePostsSkip = (num: number) => {
    setPostPage(num)
  }

  if (error) {
    return <div className="text-red-500">error!</div>
  }
  if (!data) {
    return <div className="text-green-500">Loading...</div>
  }

  return (
    <>
      <p className="text-myNavy">投稿数：{total}</p>
      <ul className="m-4">
        {data.map((post: any) => (
          <li key={post.sys.id} className="my-4">
            <CardPost
              title={post.fields.title}
              path={`/posts/${post.fields.slug}`}
              publishDate={post.fields.publishDate}
              imgUrl={'https:' + post.fields.eyecatch.fields.file.url}
              imgAlt={post.fields.eyecatch.fields.description}
            />
          </li>
        ))}
      </ul>
      <div className="p-2 flex">
        {[...Array(pagiNationTotal)].map((_, i) => (
          <button
            key={i}
            onClick={() => changePostsSkip(i + 1)}
            className={`py-1 px-3 bg-blue-300 ${i !== 0 && 'ml-2'}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
    // <Layout title="Blog page">
    //   <h1 className="text-4xl text-green-500">This is Blog page</h1>

    //   <ul className="m-4">
    //     {data.map((post: any) => (
    //       <li key={post.sys.id} className="my-4">
    //         <CardPost
    //           title={post.fields.title}
    //           path={`/posts/${post.fields.slug}`}
    //           publishDate={post.fields.publishDate}
    //           imgUrl={'https:' + post.fields.eyecatch.fields.file.url}
    //           imgAlt={post.fields.eyecatch.fields.description}
    //         />
    //       </li>
    //     ))}
    //   </ul>
    // </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const total = await getTotalPostsNumber()

  return {
    props: {
      total,
    },
  }
}

// export async function getStaticProps() {
//   const posts = await getAllPostsData()

//   return {
//     props: {
//       posts,
//     },
//   }
// }
