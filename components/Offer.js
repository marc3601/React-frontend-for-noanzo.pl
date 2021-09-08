import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import Price from "../utilities/Price"
import styles from "../styles/Offer.module.css"
const Offer = ({ item, setlisting }) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null)

    useEffect(() => {
        const unsubscribe = () => {
            if (!loading) {
                setLoading(true)
            }
            const url = `https://admin.noanzo.pl/api/auctions?id=${item}`
            fetch(url)
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    setlisting(data);
                    setLoading(false)
                })
        }
        return unsubscribe()
    }, [item])

    return (
        <section className={styles.container}>
            {loading && <div className={styles.loader}><div className={styles.ldsripple}><div></div><div></div></div></div>}
            {!loading && data[0] !== null && <><div className={styles.image_container}>
                <Carousel listing={data[0]?.image} />
            </div>
                <div className={styles.description_container}>
                    <h1 className={styles.main_title}>{data[0]?.title}</h1>
                    <p className={styles.main_description}>{data[0]?.description}
                    </p>
                    <button className={styles.main_button}><a href="tel:+48513904044">+48 513 904 044</a></button>
                    <Price price={data[0]?.price} />
                </div></>}
        </section>
    )
}

export default Offer
