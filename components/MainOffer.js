import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from "../styles/MainOffer.module.css"
const MainOffer = ({ post }) => {


    return (
        <section className={styles.top_listing_container}>
            <div className={styles.top_description_container}>
                {<h1 className={styles.main_title}>{post.title}</h1>}
                {<p className={styles.main_description}>
                    {post.description}
                </p>}
                <button className={styles.main_button}>
                    <a href="tel:+48513904044">Kontakt</a>
                </button>
            </div>
            <div className={styles.top_image_container}>
                {<Image className={styles.main_image} loading="eager" objectFit="cover" alt="testy" width={550} height={350} src={post.image[0].url} />}
            </div>
        </section>
    )
}

export default MainOffer
