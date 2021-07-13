import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from "../styles/MainOffer.module.css"
const MainOffer = ({ post }) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        setData(post[post.length - 1])
    }, [post])

    return (
        <section className={styles.top_listing_container}>
            <div className={styles.top_description_container}>
                {data && <h1 className={styles.main_title}>{data.title}</h1>}
                {data && <p className={styles.main_description}>
                    {data.description}
                </p>}
                <button className={styles.main_button}>
                    <a href="tel:+48513904044">Kontakt</a>
                </button>
            </div>
            <div className={styles.top_image_container}>
                {data && <Image className={styles.main_image} objectFit="cover" alt="testy" width={550} height={350} src={data.url} />}
            </div>
        </section>
    )
}

export default MainOffer
