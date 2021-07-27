import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import styles from "../styles/Offer.module.css"
const Offer = ({ item, listing }) => {


    return (
        <section className={styles.container}>
            {listing && <><div className={styles.image_container}>
                <Carousel listing={listing[0]?.image} />
            </div>
                <div className={styles.description_container}>
                    <h1 className={styles.main_title}>{listing[0]?.title}</h1>
                    <p className={styles.main_description}>{listing[0]?.description}
                    </p>
                    <button className={styles.main_button}><a href="tel:+48513904044">Kontakt</a></button>
                </div></>}
        </section>
    )
}

export default Offer
