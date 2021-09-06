import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head"
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
import Gallery from '../components/Gallery'
import styles from "../styles/Search.module.css"
const Search = () => {
    const router = useRouter()
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (router.isReady) {
            setQuery(router.query.q)
        }

    }, [router.asPath])


    useEffect(() => {
        if (router.isReady) {
            fetchDataToDisplayQuery();
        }
    }, [query])
    const fetchDataToDisplayQuery = () => {
        console.log("Runs");
        setLoading(true);
        results.length > 0 && setResults([]);
        const resultsTemp = []
        fetch("https://doge-memes.com/api/auctions")
            .then(res => res.json())
            .then(data => {

                data.forEach(element => {
                    const lowerCaseItem = element.title !== undefined && element?.title.toLowerCase();
                    const userQuery = query.toLowerCase();
                    const isPresent = typeof lowerCaseItem === "string" ? lowerCaseItem?.includes(userQuery) : false;
                    if (isPresent) {
                        resultsTemp.push(element)
                    }
                });
                setResults(resultsTemp)
                setLoading(false)

            })

        setLoading(false)
    }
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <meta name="theme-color" content="#d27303" />
                <title>{query.length > 0 ? query + " - noanzo.pl" : "Nic nie znaleziono"} </title>
            </Head>
            <Layout>
                <Navigation />
                <p className={styles.alert}>Wyniki wyszukiwania dla: {query}</p>
                <Gallery images={results} loading={loading} />
            </Layout>
        </>

    )
}

export default Search
