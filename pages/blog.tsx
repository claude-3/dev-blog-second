import type { NextPage } from 'next'
import { createClient } from 'contentful'

import Layout from '../components/templates/Layout'
import CardPost from '../components/molecules/CardPost'
import { getAllPostsData } from '../lib/posts'

const Blog: NextPage<any> = ({ posts }) => {
  return (
    <Layout title="Blog page">
      <h1 className="text-4xl text-green-500">This is Blog page</h1>

      <ul className="m-4">
        {posts.map((post: any) => (
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

export default Blog

export async function getStaticProps() {
  const posts = await getAllPostsData()

  return {
    props: {
      posts,
    },
  }
}
