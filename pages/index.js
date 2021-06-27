import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import MainOffer from '../components/MainOffer'
import Gallery from '../components/Gallery'
import { useRouter } from 'next/router'

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  const [bottom, setBottom] = useState(false)
  useEffect(() => {

    fetchImages(`https://picsum.photos/v2/list?page=${getRandomInt(21)}&limit=10`)
    window.addEventListener("scroll", handleScroll)
    return window.removeEventListener("scroll", null)
  }, [])

  useEffect(() => {
    if (bottom === true && page <= 20) {
      fetchImages(`https://picsum.photos/v2/list?page=${page}&limit=5`)
      setPage(page + 1)
    }

    return setLoading(false)
  }, [bottom])

  const fetchImages = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setImages(images.concat(...data))
        setLoading(false)
      })
  }


  const handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setBottom(true)
    } else {
      setBottom(false)
    }
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

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
