import Router from "next/router"
import { useState } from "react"
import TopBarProgress from "react-topbar-progress-indicator"
import '../styles/globals.css'
import 'swiper/swiper.scss';

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
