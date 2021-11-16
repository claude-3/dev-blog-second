import { memo, VFC } from 'react'
import Link from 'next/link'
import LContent from '../../templates/layout/LContent'

const Header: VFC = () => {
  return (
    <div className="p-4">
      <LContent>
        <nav className="flex">
          <Link href="/">
            <a className="p-2 text-title font-bold border-b-4 border-transparent hover:border-current">
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a className="ml-2 p-2 text-title font-bold border-b-4 border-transparent hover:border-current">
              Blog
            </a>
          </Link>
          <Link href="/">
            <a className="ml-2 p-2 text-title font-bold border-b-4 border-transparent hover:border-current">
              Contact
            </a>
          </Link>
        </nav>
      </LContent>
    </div>
  )
}

export default memo(Header)
