import Head from 'next/head'
import { useState, useEffect } from 'react'
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import MainOffer from '../components/MainOffer'
import Gallery from '../components/Gallery'
import { useRouter } from 'next/router'

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter()
  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.author !== router.query.id)
        setImages(filtered)
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
