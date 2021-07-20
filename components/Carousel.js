import React, { useState, useCallback } from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import { PrevButton, NextButton } from ".././utilities/EmblaCarouselButtons"
import styles from "../styles/Carousel.module.css"
import Image from "next/image"
const Carousel = ({ id }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel()
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (

        <div className={styles.embla} >
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    <div className={styles.embla__slide}><Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={850} height={650} src={`https://doge-memes.com/images/${id}`} /></div>
                    <div className={styles.embla__slide}><Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={850} height={650} src={`https://doge-memes.com/images/${id}`} /></div>
                    <div className={styles.embla__slide}><Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={850} height={650} src={`https://doge-memes.com/images/${id}`} /></div>

                </div>
                {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
                <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
            </div>

        </div>
    )
}

export default Carousel
