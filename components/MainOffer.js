import React from 'react'
import Image from 'next/image'
import styles from "../styles/MainOffer.module.css"
const MainOffer = () => {
    return (
        <section className={styles.top_listing_container}>
            <div className={styles.top_description_container}>
                <h1 className={styles.main_title}>Buda dla psa</h1>
                <p className={styles.main_description}>
                    Witam nietypowe budy dla piesków duzych ras
                    Legowisko 120 na 90 wysoka na 130.cm
                    Waga okolo 90 kg
                    Dno ocieplone 5 cm
                    Cała malowana sadolinem.
                </p>
                <button className={styles.main_button}>Kontakt</button>
            </div>
            <div className={styles.top_image_container}>
                <Image className={styles.main_image} width={650} height={450} src="https://ireland.apollo.olxcdn.com/v1/files/0bt31sx0lqp52-PL/image;s=1000x700" />
            </div>
        </section>
    )
}

export default MainOffer
