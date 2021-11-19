import { memo, VFC, useState } from 'react'

const MobileMenus: VFC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }
  return (
    <>
      <div
        className={`md:hidden bg-myGray bg-opacity-60 fixed right-4 top-4 cursor-pointer transition duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={toggleOpen}
      >
        <svg
          className="w-10 h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <div
        className={`bg-gray-800 fixed top-0 left-0 w-full h-full opacity-0 transition duration-500 ${
          isOpen ? 'block opacity-50' : 'hidden'
        }`}
        onClick={toggleOpen}
      ></div>
      <div
        className={`w-4/5 p-4 bg-white transition fixed top-0 left-0 transform duration-500 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="">
          <p className="">Home</p>
          <p className="">Blog</p>
          <p className="">Contact</p>
        </div>
        <div
          className="absolute top-1 right-1 cursor-pointer"
          onClick={toggleOpen}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </>
  )
}

export default memo(MobileMenus)
