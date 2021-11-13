import { VFC, memo } from 'react'

type Props = {
  content: string
}

const Test: VFC<Props> = (props) => {
  const { content } = props
  return (
    <div className="my-4 p-4 bg-green-300">
      <p className="text-4xl font-bold">{content}</p>
      <ol>
        <li>{content}</li>
      </ol>
    </div>
  )
}

export default memo(Test)
