import React from 'react'
import Image from 'next/image'
import styles from "../styles/MainOffer.module.css"
const MainOffer = ({ post }) => {

    return (
        <section className={styles.top_listing_container}>
            <div className={styles.top_description_container}>
                {post && <h1 className={styles.main_title}>{post[0].title}</h1>}
                {post && <p className={styles.main_description}>
                    {post[0].desc}
                </p>}
                <button className={styles.main_button}>
                    <a href="tel:+48513904044">Kontakt</a>
                </button>
            </div>
            <div className={styles.top_image_container}>
                {post && <Image className={styles.main_image} alt="testy" width={850} height={450} src={post[0].url} />}
            </div>
        </section>
    )
}

export default MainOffer
