import { createClient } from 'contentful'
import Image from 'next/image'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import Head from 'next/head'

import postStyles from '../../styles/post.module.scss'
import LayoutPost from '../../components/templates/LayoutPost'
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
  const { eyecatch, title, description } = post.fields
  const category = post.fields.category.fields.name
  const publishDate = new Date(post.fields.publishDate).toLocaleDateString()
  const updatedAt = new Date(post.sys.updatedAt).toLocaleDateString()
  const imgSrc = `https:${eyecatch.fields.file.url}`
  const imgW = eyecatch.fields.file.details.image.width
  const imgH = eyecatch.fields.file.details.image.height
  const imgAlt = eyecatch.fields.description

  return (
    <>
      <Head>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:url" content="https://dev-blog-second.vercel.app/" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={imgSrc} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        <meta name="twitter:card" content="summary" />
      </Head>
      <LayoutPost title={title}>
        <div className="p-4">
          <div className={postStyles.articleHeader}>
            <div className="border-t border-b border-myGray mb-6 py-6 flex flex-col items-center">
              <p className="text-xl md:text-2xl text-myNavy font-bold mb-3 px-6 tracking-tight">
                {category}
              </p>
              <div className="flex justify-center text-gray-500">
                <p className="p-1 text-sm text-myBrown bg-myGray">
                  投稿：{publishDate}
                </p>
                <p className="ml-2 p-1 text-sm text-myBrown bg-myGray">
                  最終更新：{updatedAt}
                </p>
                <ul>
                  <li>{post.metadata.tags[0].sys.name}</li>
                </ul>
              </div>
            </div>
            <div className="mb-10">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed md:leading-relaxed lg:leading-relaxed">
                {title}
              </h1>
            </div>
            <div className="mb-10 px-4 md:px-8">
              <p className="text-base md:text-lg leading-relaxed md:leading-relaxed">
                {description}
              </p>
            </div>
            <Image src={imgSrc} width={imgW} height={imgH} alt={imgAlt} />
          </div>
          <div className={postStyles.articleBody}>
            <MDXRemote {...source} components={components} />
          </div>
        </div>
      </LayoutPost>
    </>
  )
}
