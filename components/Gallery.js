import { useEffect, useState } from "react"
import styles from "../styles/Gallery.module.css"
import Image from 'next/image'
import Link from "next/link"
import Price from "../utilities/Price"
const Gallery = ({ images, loading }) => {
    const [reversed, setReversed] = useState([])
    useEffect(() => {

        if (images.length > 0) {
            setReversed([...images.reverse()])
        }

    }, [images])
    return (
        <>
            {loading && <center><Image styles={{ marginTop: "45px" }} width={50} height={50} src="/preload.gif" alt="gif" /></center>}
            <section className={styles.container} >
                {!loading && reversed.map((auction, i) => {
                    const height = String(auction.image[0]?.height)[0]
                    const style = {
                        gridRow: `span ${height}`
                    }
                    return <div key={i} className={styles.gallery_container} style={style}>
                        <Price price={auction.price} />
                        <Link href={"/" + auction.id}>
                            <div className={styles.gallery_item}>
                                <figure className={styles.image}>
                                    <Image loading="lazy" objectFit="contain" layout="responsive" src={auction.image[0]?.url} alt="test" width={auction.image[0]?.width} height={auction.image[0]?.height} />
                                    <aside className={styles.image_title}>{auction.title}</aside>
                                </figure>
                            </div>
                        </Link>
                    </div>
                })}
            </section>
        </>
    )
}

export default Gallery
