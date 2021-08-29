import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useMountedState } from 'react-use';
import Head from "next/head"
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import Offer from "../components/Offer"
import Gallery from '../components/Gallery'

export default function Listing() {
    const [gallery, setGallery] = useState([]);
    const [listing, setListing] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const router = useRouter()
    const isMounted = useMountedState();

    useEffect(() => {
        if (gallery.length > 0) setGallery([]);
        const unsubscribe = () => {
            if (isMounted) {
                fetchImages(`https://doge-memes.com/api/auctions?page=${page}&limit=20`)
                setPage(20)

            }
        }
        return unsubscribe()
    }, [router.asPath])


    useBottomScrollListener(() => {
        if (page >= 10 && isMounted) {
            fetchImages(`https://doge-memes.com/api/auctions?page=${page}&limit=10`)
            setPage(page + 10);
        }
    })

    const fetchImages = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(item => item.id !== router.query.id)
                setGallery((prev) => [...prev, ...filtered])
                setLoading(false)
            }).finally(() => {
                const current = gallery.filter(item => item.id === router.query.id)
                setListing(current)
            })
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="theme-color" content="#d27303" />
                <title>{listing[0]?.title}</title>
            </Head>
            <Layout>
                <Navigation />
                <Offer item={router.query.id} />
                <Gallery images={gallery} loading={loading} />
            </Layout>
        </>
    )
}


