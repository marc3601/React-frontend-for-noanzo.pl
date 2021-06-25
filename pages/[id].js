import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import Offer from "../components/Offer"
import Gallery from '../components/Gallery'
const Listing = () => {
    const [images, setImages] = useState([]);
    const [img, setImg] = useState(null)
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    useEffect(() => {
        fetch("https://picsum.photos/v2/list")
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter((item) => item.author != router.query.id)
                const mainImage = data.filter((item) => item.author === router.query.id)
                setImg(mainImage[0])
                setImages(filtered)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        const mainImage = images.filter((item) => item.author === router.query.id)
        setImg(mainImage[0])
    }, [router.query.id])


    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>{router.query.id}</title>
            </Head>
            <Layout>
                <Navigation />
                <Offer title={router.query.id} image={img} />
                <Gallery images={images} loading={loading} query={router.query.id} handler={setImages} />
            </Layout>
        </>
    )
}

export default Listing
