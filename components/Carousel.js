import React, { useState, useCallback, useEffect } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import styles from "../styles/Carousel.module.css"
import Image from "next/image"
const Carousel = ({ listing }) => {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        setGallery(listing)
    }, [listing])

    const [emblaRef, emblaApi] = useEmblaCarousel()

    return (

        <div className={styles.embla} >
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {gallery?.map((item, key) => (
                        <div key={key} className={styles.embla__slide}><Image sizes="100vw" layout="intrinsic" className={styles.main_image} alt="testy" width={550} height={420} src={item.url} /></div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Carousel
