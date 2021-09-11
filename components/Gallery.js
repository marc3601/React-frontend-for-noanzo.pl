import { useEffect, useState } from "react"
import styles from "../styles/Gallery.module.css"
import Image from 'next/image'
import Link from "next/link"
const Gallery = ({ images, loading }) => {

    return (
        <>
            {loading && <center><Image styles={{ marginTop: "45px" }} width={50} height={50} src="/preload.gif" alt="gif" /></center>}
            <section className={styles.container} >
                {
                    !loading && images?.map((auction, i) => {
                        let height = auction.image[0]?.height
                        let width = auction.image[0]?.width
                        let link = null
                        const thumb = auction.image?.filter(item => item.thumbnail === true)
                        if (thumb.length > 0) {
                            link = thumb[0]?.url
                            height = thumb[0]?.height;
                            width = thumb[0]?.width;
                        }
                        return <Link key={auction.id + i} href={"/" + auction.id}>
                            <div className={`${styles.card} ${height < 300 ? styles.card_small : height >= 300 && height < 600 ? styles.card_medium : styles.card_large}`} >
                                <Image className={styles.image} unoptimized={true} objectFit="contain" layout="intrinsic" src={link === null ? auction.image[0]?.url : link} alt={auction.title} width={width} height={height} />
                                <aside className={styles.image_title}><p>{auction.title}</p></aside>
                            </div>
                        </Link>
                    })
                }
            </section>
        </>
    )
}

export default Gallery
