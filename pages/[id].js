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
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const router = useRouter()
    const isMounted = useMountedState();

    useEffect(() => {
        const unsubscribe = () => {
            if (isMounted) {
                setImages([])
                fetchImages(`https://picsum.photos/v2/list?page=${page}&limit=15`)
            }
        }
        return unsubscribe()
    }, [router.asPath])


    useBottomScrollListener(() => {
        if (page <= 20 && isMounted) {
            fetchImages(`https://picsum.photos/v2/list?page=${page}&limit=5`)
            setPage(page + 1)
        }
    })

    const fetchImages = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(item => item.id !== router.query.id)
                setImages(images.concat(...filtered))
                setLoading(false)
            })
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
                <Gallery images={images} loading={loading} />
            </Layout>
        </>
    )
}


