import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useMountedState } from 'react-use';
import shuffle from '../utilities/shuffle';
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import MainOffer from '../components/MainOffer'
import Gallery from '../components/Gallery'

export default function Home({ posts }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const isMounted = useMountedState();

  useEffect(() => {
    const unsubscribe = () => {
      if (isMounted) {
        fetchImages(`https://doge-memes.com/api/auctions?page=${page}&limit=20`)
        setPage(20)
      }
    }
    return unsubscribe()
  }, [])


  useBottomScrollListener(() => {
    if (page >= 20 && isMounted && images.length === page) {
      fetchImages(`https://doge-memes.com/api/auctions?page=${page}&limit=10`)
      setPage(page + 10);
    }
  }, { offset: 20 })

  const fetchImages = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const shuffled = shuffle(data);
        setImages((prev) => [...prev, ...shuffled])
        setLoading(false)
      })
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="theme-color" content="#d27303" />
        <title>Budy dla psow</title>
      </Head>

      <Layout>
        <Navigation />
        <MainOffer post={posts[0]} />
        <Gallery images={images} loading={loading} />
      </Layout>

    </>
  )
}


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://doge-memes.com/api/auctions')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
    revalidate: 60,
  }
}
