import React, { useRef } from 'react'
import styles from "../styles/Carousel.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper'
SwiperCore.use([Navigation])
import Image from "next/image"
const Carousel = ({ listing }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className={styles.container} >
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                slidesPerGroup={1}
                slidesPerView="auto"
                grabCursor={true}
                autoHeight={true}
            // onActiveIndexChange={(swiper) => {
            //     console.log(swiper.activeIndex)
            // }}
            >
                {listing?.map((image, id) => {
                    return <SwiperSlide key={id}><Image priority={true} sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={image?.width / 1.5} height={image?.height / 1.5} src={image?.url} /> </SwiperSlide>
                })}
                {listing?.length > 1 && <>
                    <div className={`${styles.button} ${styles.prev}`} ref={prevRef}>&#8249;</div>
                    <div className={styles.button} ref={nextRef}>&#8250;</div>
                </>}

            </Swiper>
        </div >
    )
}

export default Carousel
