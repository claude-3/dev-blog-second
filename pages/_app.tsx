import '../styles/globals.css'

import { RecoilRoot } from 'recoil'
import { postsState } from '../components/util/state'

import type { AppProps } from 'next/app'
import contentfulData from '../data/contentful.json'

const initializeState = ({ set }: any) => {
  set(postsState, contentfulData)
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot initializeState={initializeState}>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp
