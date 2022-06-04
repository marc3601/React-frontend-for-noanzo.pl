import Head from "next/head";
import React from "react";
import Navigation from "../components/Navigation";
import Layout from "../layout/Layout";
import styles from "../styles/MainOffer.module.css";
const Error = () => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="theme-color" content="#d27303" />
        <title>{`Nic nie znaleziono - noanzo.pl`}</title>
      </Head>
      <Layout>
        <Navigation />
        <center>
          <h1 className={styles.main_title}>Nic nie znaleziono</h1>
        </center>
      </Layout>
    </>
  );
};

export default Error;
