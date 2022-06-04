import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Price from "../utilities/Price";
import Arrow from "../utilities/Arrow";
import styles from "../styles/Offer.module.css";
const Offer = ({ item }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleWheel = () => {
    if (!scrolled) {
      setScrolled(true);
    }
  };

  return (
    <section onWheel={handleWheel} className={styles.container}>
      {item !== null && (
        <>
          <div className={styles.image_container}>
            <Carousel listing={item[0].image} />
          </div>
          <div className={styles.description_container}>
            <h1 className={styles.main_title}>{item[0].title}</h1>
            <p className={styles.main_description}>{item[0].description}</p>
            <button className={styles.main_button}>
              <a href="tel:+48601208409">+48 601 208 409</a>
            </button>
            <Price price={item[0].price} />
          </div>
          {!scrolled && (
            <div className={styles.arrow}>
              <Arrow />
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Offer;
