import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMountedState } from "react-use";
import Head from "next/head";
import Layout from "../layout/Layout";
import Navigation from "../components/Navigation";
import Offer from "../components/Offer";
import Gallery from "../components/Gallery";
import shuffle from "../utilities/shuffle";

export default function Listing({ post }) {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const isMounted = useMountedState();
  useEffect(() => {
    const unsubscribe = () => {
      if (isMounted) {
        fetchImages(`https://admin.noanzo.pl/api/auctions`);
      }
    };
    return unsubscribe();
  }, [router.asPath]);
  const fetchImages = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.id !== router.query.id);
        const shuffled = shuffle(filtered);
        setGallery(shuffled);
        setLoading(false);
      });
  };

  if (router.isFallback) {
    return (
      <Layout>
        <Navigation />
        <center>
          <h3>Podana strona nie istnieje lub jest aktualizowana.</h3>
        </center>
      </Layout>
    );
  }
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="theme-color" content="#d27303" />
        <meta name="description" content={post[0].description}></meta>
        <meta property="og:title" content={`${post[0].title} - noanzo.pl`} />
        <meta property="og:description" content={post[0]?.description} />
        <meta property="og:image" content={post[0]?.image[0].url} />
        <title>{`${post[0]?.title} - noanzo.pl`}</title>
      </Head>
      <Layout>
        <Navigation />
        <Offer key={post[0].id} item={post} />
        <Gallery images={gallery} loading={loading} />
      </Layout>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://admin.noanzo.pl/api/auctions");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://admin.noanzo.pl/api/auctions?id=${params.id}`
  );
  const post = await res.json();

  // Pass post data to the page via props
  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
