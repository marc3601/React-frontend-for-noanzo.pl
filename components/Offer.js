import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import styles from "../styles/Offer.module.css"
const Offer = ({ item, images }) => {
    const [listing, setListing] = useState({});
    useEffect(() => {
        const imagesFileter = images.filter((img) => img.id !== item)
        setListing(...imagesFileter)
    }, [images])

    return (
        <section className={styles.container}>
            {listing && <><div className={styles.image_container}>
                <Carousel listing={listing.image} />
            </div>
                <div className={styles.description_container}>
                    <h1 className={styles.main_title}>{listing.title}</h1>
                    <p className={styles.main_description}>{listing.description}
                    </p>
                    <button className={styles.main_button}><a href="tel:+48513904044">Kontakt</a></button>
                </div></>}
        </section>
    )
}

export default Offer
