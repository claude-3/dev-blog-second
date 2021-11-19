import { memo, VFC, useState } from 'react'
import Link from 'next/link'
import MobileMenus from '../../molecules/MobileMenus'

const Header: VFC = () => {
  return (
    <div className="relative z-20">
      <div className="hidden content p-4 md:block">
        <nav className="flex">
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
  )
}

export default memo(Header)
