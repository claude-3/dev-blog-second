import { VFC, memo } from 'react'

type Props = {
  children: React.ReactNode
}

const LContent: VFC<Props> = ({ children }) => {
  return <div className="w-full max-w-7xl mx-auto">{children}</div>
}

export default memo(LContent)
