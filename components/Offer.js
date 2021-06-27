import React, { useEffect } from 'react'
import Image from "next/image"
import styles from "../styles/Offer.module.css"
const Offer = ({ id }) => {

    return (
        <section className={styles.container}><h2 className={styles.main_title}>Tesst</h2>

            <Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={550} height={350} src={`https://picsum.photos/id/${id}/550/350`} />


        </section>
    )
}

export default Offer
