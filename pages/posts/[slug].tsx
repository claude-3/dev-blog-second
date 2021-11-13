import { createClient } from 'contentful'
import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import postStyles from '../../styles/post.module.scss'
import Layout from '../../components/templates/Layout'
import Test from '../../components/blog/Test'

const components = {
  Test,
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CF_SPACE_ID || 'spaceId',
  accessToken:
    process.env.NEXT_PUBLIC_CF_DELIVERY_ACCESS_TOKEN || 'accessToken',
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blogPost',
  })

  const paths = res.items.map((item: any) => {
    const slugValue = item.fields.slug

    return {
      params: { slug: slugValue },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const { items }: any = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  })

  const postsList = items
  const source = items[0].fields.content
  const mdxSource = await serialize(source)

  return {
    props: { post: items[0], source: mdxSource },
  }
}

export default function PostDetails({ post, source }: any) {
  const { eyecatch, title } = post.fields
  const publishDate = new Date(post.fields.publishDate).toLocaleDateString()
  const updatedAt = new Date(post.sys.updatedAt).toLocaleDateString()
  // console.log(post.fields)

  return (
    <>
      <Layout title={title}>
        <div className={postStyles.articleHeader}>
          <Image
            src={'https:' + eyecatch.fields.file.url}
            width={eyecatch.fields.file.details.image.width}
            height={eyecatch.fields.file.details.image.height}
            alt={eyecatch.fields.description}
          />
          <h1>{title}</h1>
          <div>
            <p>投稿日：{publishDate}</p>
            <p>最終更新：{updatedAt}</p>
          </div>
        </div>
        <div className={postStyles.articleBody}>
          <MDXRemote {...source} components={components} />
        </div>
      </Layout>
    </>
  )
}
