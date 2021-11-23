import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMountedState } from 'react-use';
import Head from "next/head"
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import Offer from "../components/Offer"
import Gallery from '../components/Gallery'
import shuffle from '../utilities/shuffle';

export default function Listing() {
    const [gallery, setGallery] = useState([]);
    const [listing, setListing] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter()
    const isMounted = useMountedState();

    useEffect(() => {
        const unsubscribe = () => {
            if (isMounted) {
                fetchImages(`https://admin.noanzo.pl/api/auctions`)
            }
        }
        return unsubscribe()
    }, [router.asPath])

    const fetchImages = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter(item => item.id !== router.query.id)
                const shuffled = shuffle(filtered);
                setGallery(shuffled);
                setLoading(false)
            })
    }
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="theme-color" content="#d27303" />
                <meta name="description" content={listing[0]?.description}></meta>
                <meta property="og:title" content={`${listing[0]?.title} - noanzo.pl`} />
                <meta property="og:description" content={listing[0]?.description} />
                <meta property="og:image" content={listing[0]?.image[0].url} />
                <title>{`${listing[0]?.title} - noanzo.pl`}</title>
            </Head>
            <Layout>
                <Navigation />
                <Offer item={router.query.id} setlisting={setListing} />
                <Gallery images={gallery} loading={loading} />
            </Layout>
        </>
    )
}


