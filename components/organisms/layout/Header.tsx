import { memo, VFC, useState } from 'react'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'

import MobileMenus from '../../molecules/MobileMenus'

const Header: VFC = () => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
    initialInView: true,
  })

  return (
    <>
      <div className="js-header-trigger" ref={ref}></div>
      <header
        className={`relative z-20 py-4 md:sticky md:top-0 transition duration-400  ${
          !inView && 'header-scroll'
        }`}
      >
        <div className="hidden content px-4 md:flex md:items-center">
          <Link href="/">
            <a className="text-2xl font-bold hover:opacity-80">
              Claude<span className="text-myOrange">B</span>log
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
                Category
              </a>
            </Link>
            <Link href="/">
              <a className="ml-2 p-2 text-title font-bold border-b-4 border-transparent hover:border-myBlack">
                About
              </a>
            </Link>
          </nav>
        </div>
        <MobileMenus />
      </header>
    </>
  )
}

export default memo(Header)
