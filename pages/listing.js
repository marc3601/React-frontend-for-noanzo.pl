import React from 'react'
import Head from "next/head"
import Layout from "../layout/Layout"
import Navigation from '../components/Navigation'
const listing = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Budy dla psow</title>
            </Head>
            <Layout>
                <Navigation />
                <center><h2>Hullo</h2></center>
            </Layout>
        </>
    )
}

export default listing
