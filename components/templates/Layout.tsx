import { memo, VFC } from 'react'
import Head from 'next/head'
import Header from '../organisms/layout/Header'
import Footer from '../organisms/layout/Footer'
import Sidebar from '../organisms/layout/Sidebar'
import LContent from './layout/LContent'

type Props = {
  children: React.ReactNode
  title: string
}

const Layout: VFC<Props> = ({ children, title = 'Page title' }) => {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <div className="h-80 flex justify-center items-center">
        <div className="p4">
          <p className="text-title text-5xl md:text-8xl lg:text-9xl tracking-tight">
            ClaudeWEB
          </p>
        </div>
      </div>
      <div className="mt-10">
        <LContent>
          <div className="grid lg:grid-cols-base gap-4">
            <main className="min-h-screen">{children}</main>
            <aside className="hidden lg:block">
              <Sidebar />
            </aside>
          </div>
        </LContent>
      </div>
      <div className="h-80 bg-quaternary flex justify-center items-center">
        <p className="text-2xl">Bottom area</p>
      </div>
      <Footer />
    </div>
  )
}

export default memo(Layout)
