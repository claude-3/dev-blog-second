import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/templates/Layout'
import { getNewPostsData, getCategoryPostsData } from '../lib/posts'
import CardThumb from '../components/molecules/CardThumb'

const Home: NextPage<any> = ({
  newPosts,
  cateFirstPosts,
  cateSecondPosts,
  cateThirdPosts,
}) => {
  return (
    <Layout title="Home page">
      <section className="py-4">
        <div className="p-4">
          <div className="mb-4 pb-2">
            <h2 className="text-5xl text-title rotate-90">Articles</h2>
            <p className="text-myNavy">新着記事</p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-2 gap-8">
              {newPosts.map((post: any, index: number) => {
                // 一番新しい記事を飛ばす
                // if (index === 0 || index >= 5) {
                //   return false
                // }
                const postProps = {
                  number: index,
                  id: post.sys.id,
                  slug: post.fields.slug,
                  imgUrl: `https:${post.fields.eyecatch.fields.file.url}`,
                  imgAlt: post.fields.eyecatch.fields.description,
                  imgW: post.fields.eyecatch.fields.file.details.image.width,
                  imgH: post.fields.eyecatch.fields.file.details.image.height,
                  publishDate: new Date(
                    post.fields.publishDate
                  ).toLocaleDateString(),
                  title: post.fields.title,
                  category: post.fields.category.fields.name,
                  indexFirst: index <= 1,
                }
                return (
                  <CardThumb
                    key={postProps.id}
                    slug={postProps.slug}
                    imgUrl={postProps.imgUrl}
                    imgAlt={postProps.imgAlt}
                    imgW={postProps.imgW}
                    imgH={postProps.imgH}
                    publishDate={postProps.publishDate}
                    title={postProps.title}
                    category={postProps.category}
                    indexFirst={postProps.indexFirst}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="py-4">
        <div className="p-4">
          <div className="mb-4 pb-2">
            <h2 className="text-4xl text-title">Affiliate</h2>
            <p className="text-myNavy">アフィリエイト再入門</p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 gap-3">
              <p>工事中...</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-4">
          <div className="mb-4 pb-2">
            <h2 className="text-4xl text-title">
              Sales <span className="text-2xl text-myBrown">/</span> Writing
            </h2>
            <p className="text-myNavy">セールス・ライティング</p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 gap-3">
              <p>工事中...</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const cate1 = 'affiliate'
  const cate2 = 'sales'
  const cate3 = 'makemoney'

  const postsSet = {
    newPosts: await getNewPostsData(4, 1),
    cateFirstPosts: await getCategoryPostsData(cate1),
    cateSecondPosts: await getCategoryPostsData(cate2),
    cateThirdPosts: await getCategoryPostsData(cate3),
  }
  // const newPosts = await getNewPostsData()
  // const cateFirstPosts = await getCategoryPostsData(cate1)
  // const cateSecondPosts = await getCategoryPostsData(cate2)
  // const cateThirdPosts = await getCategoryPostsData(cate3)

  return {
    props: { ...postsSet },
  }
}
