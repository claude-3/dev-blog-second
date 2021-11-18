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
      </Head>
      <Header />
      <div className="mt-10">
        <LContent>
          <div className="grid lg:grid-cols-base gap-14">
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
