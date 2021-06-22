import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Loupe from "../utilities/Loupe"
import styles from '../styles/Home.module.css'
import { div } from 'prelude-ls'

export default function Home() {
  const [images, setImages] = useState([]);
  const [chunk1, setChunk1] = useState([]);
  const [chunk2, setChunk2] = useState([]);
  const [chunk3, setChunk3] = useState([]);
  const [chunk4, setChunk4] = useState([]);


  useEffect(() => {
    fetch("https://picsum.photos/v2/list")
      .then((res) => res.json())
      .then((data) => setImages(data))
  }, [])


  useEffect(() => {
    putImagesInColumns(images)
  }, [images])


  const putImagesInColumns = (images) => {
    let imagesInRow = images.length / 4;
    setChunk1(images.slice(0, imagesInRow))
    setChunk2(images.slice(imagesInRow, (imagesInRow * 2) - 1))
    setChunk3(images.slice(imagesInRow * 2, (imagesInRow * 3)))
    setChunk4(images.slice(imagesInRow * 3, imagesInRow.length))
    console.log(Math.floor(imagesInRow));
    let remainingImages = images.length % 4;
    console.log(remainingImages)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Budy dla psow</title>
      </Head>
      <main className={styles.container}>
        {/* Navigation section */}
        <div className={styles.navigation_section}>
          <div className={styles.logo}>LOGO</div>
          <div className={styles.search_container}>
            <div className={styles.search_wrapper}>
              <Loupe />
              <input className={styles.search_input} placeholder="Szukaj" />
            </div>
          </div>
        </div>
        {/* Main section */}
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
            <button className={styles.main_button}>Kontakt</button>
          </div>
          <div className={styles.top_image_container}>
            <Image className={styles.main_image} width={650} height={450} src="https://ireland.apollo.olxcdn.com/v1/files/0bt31sx0lqp52-PL/image;s=1000x700" />
          </div>
        </section>
        {/* GallerySection */}
        <section className={styles.responsive_grid_container}>
          <div className={styles.responsive_grid_column}>
            {images.length > 0 && chunk1.map((img, i) => {
              return <div key={i + 1} className={styles.image_container}>
                <Image loading="lazy" layout="responsive" className={styles.gallery_image} width={650} height={450} key={i} src={img.download_url} />
              </div>
            })}
          </div>
          <div className={styles.responsive_grid_column}>
            {images.length > 0 && chunk2.map((img, i) => {
              return <div key={i + 2} className={styles.image_container}>
                <Image loading="lazy" layout="responsive" className={styles.gallery_image} width={650} height={450} key={i + 2} src={img.download_url} />
              </div>
            })}
          </div>
          <div className={styles.responsive_grid_column}>
            {images.length > 0 && chunk3.map((img, i) => {
              return <div key={i + 3} className={styles.image_container}>
                <Image loading="lazy" layout="responsive" className={styles.gallery_image} width={650} height={450} key={i + 3} src={img.download_url} />
              </div>
            })}
          </div>
          <div className={styles.responsive_grid_column}>
            {images.length > 0 && chunk4.map((img, i) => {
              return <div key={i + 4} className={styles.image_container}>
                <Image loading="lazy" layout="responsive" className={styles.gallery_image} width={650} height={450} src={img.download_url} />
              </div>
            })}
          </div>
        </section>

      </main>
    </>
  )
}
