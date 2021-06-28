import React from 'react'
import Image from "next/image"
import Carousel from './Carousel'
import styles from "../styles/Offer.module.css"
const Offer = ({ id }) => {

    return (
        <section className={styles.container}>
            <div className={styles.image_container}>
                {/* <Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={650} height={450} src={`https://picsum.photos/id/${id}/550/350`} /> */}
                <Carousel id={id} />
            </div>
            <div className={styles.description_container}>
                <h1 className={styles.main_title}>Buda dla psa {id}</h1>
                <p className={styles.main_description}>Witam nietypowe budy dla piesków duzych ras Legowisko 120 na 90 wysoka na 130.cm Waga okolo 90 kg Dno ocieplone 5 cm Cała malowana sadolinem.
                </p>
                <button className={styles.main_button}>Kontakt</button>
            </div>
        </section>
    )
}

export default Offer
