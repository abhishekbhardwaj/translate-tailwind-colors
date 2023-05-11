/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { AppProps } from 'next/app'
import { GoogleAnalytics } from 'nextjs-google-analytics'

import '@/styles/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <GoogleAnalytics gaMeasurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} trackPageViews />
    <Component {...pageProps} />
  </>
)

export default App
