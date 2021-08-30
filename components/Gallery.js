import { useEffect, useState } from "react"
import styles from "../styles/Gallery.module.css"
import Image from 'next/image'
import Link from "next/link"
const Gallery = ({ images, loading }) => {
    // const [reversed, setReversed] = useState([])
    // useEffect(() => {

    //     if (images.length > 0) {
    //         setReversed([...images.reverse()])
    //     }

    // }, [images])
    return (
        <>
            {loading && <center><Image styles={{ marginTop: "45px" }} width={50} height={50} src="/preload.gif" alt="gif" /></center>}
            <section className={styles.container} >
                {
                    !loading && images?.map((auction, i) => {
                        const height = auction.image[0]?.height
                        return <Link key={auction.id + i} href={"/" + auction.id}>
                            <div className={`${styles.card} ${height < 300 ? styles.card_small : height >= 300 && height < 600 ? styles.card_medium : styles.card_large}`} >
                                <Image className={styles.image} objectFit="contain" layout="intrinsic" src={auction.image[0]?.url} alt={auction.title} width={auction.image[0]?.width} height={auction.image[0]?.height} />
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
