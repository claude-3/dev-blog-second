import { memo, VFC, useState } from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

import MobileMenus from '../../molecules/MobileMenus'

const Header: VFC = () => {
  const [ref, inView] = useInView({
    rootMargin: '0px 0px',
  })
  return (
    <>
      <div className="js-header-trigger" ref={ref}></div>
      <div
        className={`relative z-20 py-4 md:sticky md:top-0 ${
          !inView && 'header-scroll'
        }`}
      >
        <div className="hidden content px-4 md:flex md:items-center">
          <Link href="/">
            <a className="hidden text-xl font-bold hover:opacity-80">
              ClaudeBlog
            </a>
          </Link>
          <nav className="flex justify-end ml-auto">
            <Link href="/">
              <a className="p-2 text-title font-bold border-b-4 border-transparent hover:border-myBlack">
                Home
              </a>
            </Link>
            <Link href="/blog">
              <a className="ml-2 p-2 text-title font-bold border-b-4 border-transparent hover:border-myBlack">
                Blog
              </a>
            </Link>
            <Link href="/">
              <a className="ml-2 p-2 text-title font-bold border-b-4 border-transparent hover:border-myBlack">
                Contact
              </a>
            </Link>
          </nav>
        </div>
        <MobileMenus />
      </div>
    </>
  )
}

export default memo(Header)
