import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/templates/Layout'
import { getNewPostsData, getCategoryPostsData } from '../lib/posts'

const Home: NextPage<any> = ({
  newPosts,
  cateFirstPosts,
  cateSecondPosts,
  cateThirdPosts,
}) => {
  return (
    <Layout title="Home page">
      <section>
        <div className="p-4">
          <div className="mb-4 pb-2">
            <h2 className="text-5xl text-title">Articles</h2>
            <p className="text-primary">新着記事一覧</p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 gap-3">
              {newPosts.map((post: any) => (
                <div className="" key={post.sys.id}>
                  <Link href={`/posts/${post.fields.slug}`}>
                    <a className="block hover:opacity-60">
                      <div className="overflow-hidden rounded-md shadow-lg">
                        <Image
                          src={'https:' + post.fields.eyecatch.fields.file.url}
                          alt={post.fields.eyecatch.fields.description}
                          width={
                            post.fields.eyecatch.fields.file.details.image.width
                          }
                          height={
                            post.fields.eyecatch.fields.file.details.image
                              .height
                          }
                        />
                        <div className="p-6">
                          <p className="tracking-widest text-xs mb-1">
                            {post.fields.publishDate}
                          </p>
                          <h1 className="text-title text-lg mb-3">
                            {post.fields.title}
                          </h1>
                          <p className="mb-3 text-sm">
                            ここに説明文が入る。ここに説明文が入る。
                            ここに説明文が入る。 ここに説明文が入る。
                            ここに説明文が入る。
                          </p>
                          <h2 className="text-xs">
                            {post.fields.category.fields.name}
                          </h2>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-4">
          <div className="mb-4 pb-2">
            <h2 className="text-4xl text-title">Affiliate</h2>
            <p className="text-primary">アフィリエイト再入門</p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 gap-3">
              {cateFirstPosts.map((post: any) => (
                <div className="" key={post.sys.id}>
                  <Link href={`/posts/${post.fields.slug}`}>
                    <a className="block hover:opacity-60">
                      <div className="overflow-hidden rounded-md shadow-lg">
                        <Image
                          src={'https:' + post.fields.eyecatch.fields.file.url}
                          alt={post.fields.eyecatch.fields.description}
                          width={
                            post.fields.eyecatch.fields.file.details.image.width
                          }
                          height={
                            post.fields.eyecatch.fields.file.details.image
                              .height
                          }
                        />
                        <div className="p-6">
                          <p className="tracking-widest text-xs mb-1">
                            {post.fields.publishDate}
                          </p>
                          <h1 className="text-title text-lg mb-3">
                            {post.fields.title}
                          </h1>
                          <p className="mb-3 text-sm">
                            ここに説明文が入る。ここに説明文が入る。
                            ここに説明文が入る。 ここに説明文が入る。
                            ここに説明文が入る。
                          </p>
                          <h2 className="text-xs">
                            {post.fields.category.fields.name}
                          </h2>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="p-4">
          <div className="mb-4 pb-2">
            <h2 className="text-4xl text-title">
              Sales <span className="text-2xl text-gray-600">/</span> Writing
            </h2>
            <p className="text-primary">セールス・ライティング</p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-3 gap-3">
              {cateSecondPosts.map((post: any) => (
                <div className="" key={post.sys.id}>
                  <Link href={`/posts/${post.fields.slug}`}>
                    <a className="block hover:opacity-60">
                      <div className="overflow-hidden rounded-md shadow-lg">
                        <Image
                          src={'https:' + post.fields.eyecatch.fields.file.url}
                          alt={post.fields.eyecatch.fields.description}
                          width={
                            post.fields.eyecatch.fields.file.details.image.width
                          }
                          height={
                            post.fields.eyecatch.fields.file.details.image
                              .height
                          }
                        />
                        <div className="p-6">
                          <p className="tracking-widest text-xs mb-1">
                            {post.fields.publishDate}
                          </p>
                          <h1 className="text-title text-lg mb-3">
                            {post.fields.title}
                          </h1>
                          <p className="mb-3 text-sm">
                            ここに説明文が入る。ここに説明文が入る。
                            ここに説明文が入る。 ここに説明文が入る。
                            ここに説明文が入る。
                          </p>
                          <h2 className="text-xs">
                            {post.fields.category.fields.name}
                          </h2>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
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
    newPosts: await getNewPostsData(),
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
