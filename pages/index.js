import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import MainOffer from '../components/MainOffer'
import Gallery from '../components/Gallery'


export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        setImages(data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Budy dla psow</title>
      </Head>
      <Layout>
        <Navigation />
        <MainOffer />
        <Gallery images={images} loading={loading} />
      </Layout>
    </>
  )
}
