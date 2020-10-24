import React, { ReactElement } from 'react'
import type { AppProps } from 'next/app'
import '../css/tailwind.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
