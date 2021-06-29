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
                <button className={styles.main_button}>
                    <a href="tel:+48513904044">Kontakt</a>
                </button>
            </div>
            <div className={styles.top_image_container}>
                <Image className={styles.main_image} alt="testy" width={850} height={450} src="https://firebasestorage.googleapis.com/v0/b/anzo-7395b.appspot.com/o/buda.jpeg?alt=media&token=a6b64597-a036-49df-8ec9-bf210356e243" />
            </div>
        </section>
    )
}

export default MainOffer
