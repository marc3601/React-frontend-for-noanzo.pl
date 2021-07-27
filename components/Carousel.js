import React, { useEffect } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import styles from "../styles/Carousel.module.css"
import Image from "next/image"
const Carousel = ({ item, listing }) => {

    useEffect(() => {
        console.log(listing);
    }, [listing])

    const [emblaRef, emblaApi] = useEmblaCarousel()

    return (

        <div className={styles.embla} >
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {listing?.map((item, key) => (
                        <div key={key} className={styles.embla__slide}><Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={550} height={420} src={item?.url} /></div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Carousel
