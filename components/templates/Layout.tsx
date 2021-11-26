import { memo, VFC } from 'react'
import Head from 'next/head'
import Header from '../organisms/layout/Header'
import Footer from '../organisms/layout/Footer'
import Sidebar from '../organisms/layout/Sidebar'
import LContent from './layout/LContent'
import Link from 'next/link'
import Image from 'next/image'
import CardCate from '../molecules/CardCate'

import { useRecoilValue } from 'recoil'
import { postsState } from '../util/state'

type Props = {
  children: React.ReactNode
  title: string
}

const Layout: VFC<Props> = ({ children, title = 'Page title' }) => {
  const postsList = useRecoilValue(postsState)
  const latestPost = postsList[0]
  return (
    <div className="relative">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="py-10 md:mb-6 content-l">
        <div className="px-4 flex flex-col">
          <h1 className="inline-block text-title text-tsm md:text-tmd lg:text-tlg xl:text-txl leading-none tracking-tighter">
            ClaudeBlog
          </h1>
          <div className="flex md:pl-4 leading-none transform">
            <span className="text-xs md:text-sm lg:text-lg">
              個人でまっとうに稼ぐことはできるのか
            </span>
          </div>
        </div>
      </div>

      <section className="bg-myGray">
        <div className="content">
          <div className="py-14 grid md:grid-cols-3 gap-6">
            <CardCate
              category="Affiliate"
              url="/"
              title="アフィリエイトってまともなの？"
              description="アフィリエイトがまっとうな方法で、実際に稼げるものなのか、普通の人でも稼げるものなのか、について調べていこうと思います。"
            />
            <CardCate
              category="Sales"
              url="/"
              title="お金を稼ぐには何を知り、身につければいいんだろう？"
              description="普通の人でも個人でまっとうに稼ぐために必要なことはなんだろう。ものを売る、提案する、魅力を語る。など、普通の人でもできること、クリーンにお金を稼ぐ方法について調べていきます。"
            />
            <CardCate
              category="Make Money"
              url="/"
              title="他にまっとうに稼げる副業ってあるの？"
              description="アフィリエイト以外に個人でもまっとうに稼げる商売、副業があるのか調べてみました。"
            />
          </div>
        </div>
      </section>

      {/* <section className="py-8 bg-myGray">
        <div className="content px-6">
          <div className="mb-4 pb-2">
            <h2 className="text-3xl md:text-5xl text-title rotate-90">
              Latest
            </h2>
            <p className="text-myNavy">最新記事</p>
          </div>
          <div className="">
            <div className="">
              {(() => {
                const post: any = latestPost
                const postProps = {
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
                  description: post.fields.description,
                  category: post.fields.category.fields.name,
                }
                return (
                  <Link href={`/posts/${postProps.slug}`}>
                    <a className="block md:transform hover:translate-y-2 hover:translate-x-2">
                      <div className="grid lg:grid-cols-top gap-8">
                        <div className="overflow-hidden">
                          <Image
                            src={postProps.imgUrl}
                            alt={postProps.imgAlt}
                            width={postProps.imgW}
                            height={postProps.imgH}
                          />
                        </div>
                        <div className="">
                          <p className="tracking-wider mb-1 px-1 text-myNavy">
                            <span className="tracking-tight text-myOrange mr-2 border border-myOrange px-1">
                              NEW
                            </span>
                            {postProps.publishDate}
                          </p>
                          <p className="text-title text-lg md:text-2xl mb-3">
                            {postProps.title}
                          </p>
                          <p className="text-sm md:text-lg mb-3">
                            {postProps.description}
                          </p>
                          <p className="py-1 px-2 text-center border border-myBlack text-xs font-medium tracking-widest">
                            {postProps.category}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                )
              })()}
            </div>
          </div>
        </div>
      </section> */}

      <div className="py-8">
        <LContent>
          <div className="grid lg:grid-cols-base gap-10">
            <main className="min-h-screen">{children}</main>
            <aside className="hidden lg:block">
              <Sidebar />
            </aside>
          </div>
        </LContent>
      </div>
      <Footer />
    </div>
  )
}

export default memo(Layout)
