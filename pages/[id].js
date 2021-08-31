import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { useBottomScrollListener } from 'react-bottom-scroll-listener';
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
    // const [page, setPage] = useState(0);
    const router = useRouter()
    const isMounted = useMountedState();

    useEffect(() => {
        // setPage(0);
        // if (gallery.length > 0) setGallery([]);

        const unsubscribe = () => {
            if (isMounted) {
                fetchImages(`https://doge-memes.com/api/auctions`)
                // setPage(20)
            }
        }
        return unsubscribe()
    }, [router.asPath])

    // ZA MALO DANYCH NA OPOZNIANIE WCZYTYWANIA !!!
    // PROBLEM Z ODPOWIEDNIM WCZTYWANIEM KOLEJNYCH AUKCJI.

    // useBottomScrollListener(() => {
    //     if (page >= 20 && isMounted && gallery.length === page) {
    //         fetchImages(`https://doge-memes.com/api/auctions?page=${page}&limit=10`)
    //         setPage(page + 10);
    //     }
    // })

    const fetchImages = (url) => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
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
                <title>{listing[0]?.title}</title>
            </Head>
            <Layout>
                <Navigation />
                <Offer item={router.query.id} setlisting={setListing} />
                <Gallery images={gallery} loading={loading} />
            </Layout>
        </>
    )
}


