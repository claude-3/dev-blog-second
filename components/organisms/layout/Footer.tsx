import { memo, VFC } from 'react'
import LContent from '../../templates/layout/LContent'

const Footer = () => {
  return (
    <div className="bg-myGray">
      <div className="border-b">
        <div className="conetnt border-myBrown h-80 flex justify-center items-center">
          <div className="">Footer body</div>
        </div>
      </div>
      <footer>
        <div className="content">
          <div className="p-4 text-center">copywright</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
