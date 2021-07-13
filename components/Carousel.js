import React from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import styles from "../styles/Carousel.module.css"
import Image from "next/image"
const Carousel = ({ id }) => {
    const [emblaRef] = useEmblaCarousel()
    return (

        <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                <div className={styles.embla__slide}><Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={850} height={650} src={`https://doge-memes.com/images/${id}`} /></div>
                <div className={styles.embla__slide}><Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={850} height={650} src={`https://doge-memes.com/images/${id}`} /></div>
                <div className={styles.embla__slide}><Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={850} height={650} src={`https://doge-memes.com/images/${id}`} /></div>
            </div>
        </div>
    )
}

export default Carousel
