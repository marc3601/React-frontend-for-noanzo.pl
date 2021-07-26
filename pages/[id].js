import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useMountedState } from 'react-use';
import Head from "next/head"
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import Offer from "../components/Offer"
import Gallery from '../components/Gallery'

export default function Listing() {
    const [auctions, setAuctions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("Anzo");
    const [page, setPage] = useState(1)
    const router = useRouter()
    const isMounted = useMountedState();

    useEffect(() => {
        const unsubscribe = () => {
            if (isMounted) {
                fetchImages(`https://doge-memes.com/api/auctions`)
                // if (auctions.length > 0) {
                //     const title = auctions.filter((image) => image.id !== router.query.id)
                //     setTitle(title[0].title);
                // }

            }
        }
        return unsubscribe()
    }, [router.asPath])


    // useBottomScrollListener(() => {
    //     if (page <= 20 && isMounted) {
    //         fetchImages(`https://picsum.photos/v2/list?page=${page}&limit=5`)
    //         setPage(page + 1)
    //     }
    // })

    const fetchImages = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(item => item.id !== router.query.id)
                setAuctions(filtered)
                setLoading(false)
            })
    }


    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Test</title>
            </Head>
            <Layout>
                <Navigation />
                <Offer item={router.query.id} images={auctions} />
                <Gallery images={auctions} loading={loading} />
            </Layout>
        </>
    )
}


