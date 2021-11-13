import { memo, VFC } from 'react'
import Link from 'next/link'
import LContent from '../../templates/layout/LContent'

const Header: VFC = () => {
  return (
    <div className="p-4">
      <LContent>
        <ul className="flex">
          <li>
            <Link href="/">
              <a className="p-4 hover:text-green-400 transition duration-200">
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="p-4 hover:text-green-400 transition duration-200">
                Blog
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="p-4 hover:text-green-400 transition duration-200">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </LContent>
    </div>
  )
}

export default memo(Header)
