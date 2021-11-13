import type { NextPage } from 'next'
import { createClient } from 'contentful'

import Layout from '../components/templates/Layout'
import CardPost from '../components/molecules/CardPost'
import { useRecoilValue } from 'recoil'
import { postsState } from '../components/util/state'

const Home: NextPage<any> = ({ posts }) => {
  const postsList = useRecoilValue(postsState)
  return (
    <Layout title="Home page">
      <h1 className="mb-8 text-4xl text-green-500">This is Home page</h1>
      <p className="">新着記事一覧</p>
      <ul className="m-4">
        {postsList.map((post: any) => (
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
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CF_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN || '',
  })
  const res = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
  })

  return {
    props: {
      posts: res.items,
    },
  }
}
