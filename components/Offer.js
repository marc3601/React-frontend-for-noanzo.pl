import React, { useEffect } from 'react'
import Image from "next/image"
import styles from "../styles/Offer.module.css"
const Offer = ({ title, image }) => {

    return (
        <section className={styles.container}><h2 className={styles.main_title}>{title}</h2>
            <center>
                {image && <Image className={styles.main_image} alt="testy" width={550} height={350} src={image.download_url} />}
            </center>
        </section>
    )
}

export default Offer
