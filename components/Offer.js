import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import styles from "../styles/Offer.module.css"
const Offer = ({ item, listing }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])

    useEffect(() => {

        const unsubscribe = () => {
            const url = `https://doge-memes.com/api/auctions?id=${item}`
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    setLoading(false)

                })
        }
        return unsubscribe()
    }, [item])

    return (
        <section className={styles.container}>
            {loading && <center><h2>Loading...</h2></center>}
            {!loading && <><div className={styles.image_container}>
                <Carousel listing={data?.image[0]} />
            </div>
                <div className={styles.description_container}>
                    <h1 className={styles.main_title}>{data?.title}</h1>
                    <p className={styles.main_description}>{data?.description}
                    </p>
                    <button className={styles.main_button}><a href="tel:+48513904044">Kontakt</a></button>
                </div></>}
        </section>
    )
}

export default Offer
