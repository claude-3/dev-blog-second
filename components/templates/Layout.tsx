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
    <div className="text-gray-700">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <div className="border">
        <LContent>
          <div className="flex">
            <div className="w-full border">
              <main className="min-h-screen">{children}</main>
            </div>
            <Sidebar />
          </div>
        </LContent>
      </div>
      <Footer />
    </div>
  )
}

export default memo(Layout)
