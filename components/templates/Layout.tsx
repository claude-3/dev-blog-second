import { memo, VFC } from 'react'
import Head from 'next/head'
import Header from '../organisms/layout/Header'
import Footer from '../organisms/layout/Footer'
import Sidebar from '../organisms/layout/Sidebar'
import LContent from './layout/LContent'
import Link from 'next/link'
import Image from 'next/image'

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
    <div className="">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="h-40 md:h-80 flex justify-center items-center">
        <div className="p4">
          <p className="text-title text-5xl md:text-8xl lg:text-9xl tracking-tight">
            ClaudeWEB
          </p>
        </div>
      </div>
      <section className="py-4">
        <div className="content px-6">
          <div className="mb-4 pb-2">
            <h2 className="text-5xl text-title rotate-90">Articles</h2>
            <p className="text-myNavy">新着記事</p>
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
                        <div className="bg-white">
                          <p className="tracking-wider mb-1 px-1 text-myNavy">
                            <span className="tracking-tight text-myOrange mr-2 border border-myOrange px-1">
                              NEW
                            </span>
                            {postProps.publishDate}
                          </p>
                          <p className="text-title text-3xl mb-3">
                            {postProps.title}
                          </p>
                          <p className="text-xl mb-3">
                            {postProps.description}
                          </p>
                          <p className="py-1 px-2 text-center rounded bg-myGray text-xs font-medium tracking-widest">
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
      </section>

      <div className="mt-10 py-8">
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
