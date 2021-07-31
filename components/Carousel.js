import React, { useEffect } from 'react'
import styles from "../styles/Carousel.module.css"
import Slider from "react-slick";
import Image from "next/image"
const Carousel = ({ listing }) => {


    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };

    return (
        <div className={styles.container} >
            <Slider {...settings}>
                <Image sizes="100vw" layout="responsive" className={styles.main_image} alt="testy" width={listing?.width} height={listing?.height} src={listing?.url} />
            </Slider>

        </div>
    )
}

export default Carousel
