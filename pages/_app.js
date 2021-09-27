import Router from "next/router"
import { useState } from "react"
import { useEffect } from 'react'
import TopBarProgress from "react-topbar-progress-indicator"
import '../styles/globals.css'
import 'swiper/swiper.scss';
import * as ga from '../lib/ga'

TopBarProgress.config({
  barColors: {
    "0": "#d27303",
    "1.0": "#c7929a"
  },
  shadowBlur: 4,
  barThickness: 4
});


function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    Router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [Router.events])

  Router.events.on("routeChangeStart", () => {
    setProgress(true)
  })

  Router.events.on("routeChangeComplete", () => {
    setProgress(false)
  })
  return (
    <>
      {progress && <TopBarProgress />}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
