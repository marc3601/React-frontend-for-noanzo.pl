import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import Offer from "../components/Offer"
import Gallery from '../components/Gallery'

export default function Listing() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [bottom, setBottom] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const handleFetching = () => {
            if (images.length !== 0) {
                setImages([])
            }
            fetchImages(`https://picsum.photos/v2/list?page=${getRandomInt(21)}&limit=10`)
            window.addEventListener("scroll", handleScroll)
        }
        return () => handleFetching()

    }, [router.query.id])



    useEffect(() => {
        const handleFetching = () => {
            if (bottom === true && page <= 20) {
                fetchImages(`https://picsum.photos/v2/list?page=${page}&limit=5`)
                setPage(page + 1)
            }
        }

        return handleFetching()
    }, [bottom])

    const fetchImages = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(item => item.id !== router.query.id)
                setImages(images.concat(...filtered))
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
                <title>{router.query.id}</title>
            </Head>
            <Layout>
                <Navigation />
                <Offer id={router.query.id} images={images} />
                <Gallery images={images} loading={loading} query={router.query.id} handler={setImages} />
            </Layout>
        </>
    )
}


