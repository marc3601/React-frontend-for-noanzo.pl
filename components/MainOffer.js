import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from "../styles/MainOffer.module.css"
const MainOffer = ({ post }) => {
    let link = null
    const thumb = post.image?.filter(item => item.thumbnail === true)
    if (thumb.length > 0) {
        link = thumb[0]?.url
    }

    return (
        <section className={styles.top_listing_container}>
            <div className={styles.top_description_container}>
                {<h1 className={styles.main_title}>{post.title}</h1>}
                {<p className={styles.main_description}>
                    {post.description}
                </p>}
                <button className={styles.main_button}>
                    <a href="tel:+48513904044">+48 513 904 044</a>
                </button>
            </div>
            <div className={styles.top_image_container}>
                {<Image className={styles.main_image} unoptimized={true} objectFit="cover" alt={post.title} priority={true} width={550} height={350} src={link === null ? post.image[0].url : link} />}
            </div>
        </section>
    )
}

export default MainOffer
