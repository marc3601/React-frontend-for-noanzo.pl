import { useEffect, useState } from "react"
import styles from "../styles/Gallery.module.css"
import Image from 'next/image'
import Link from "next/link"
import Price from "../utilities/Price"
const Gallery = ({ images, loading }) => {
    const [reversed, setReversed] = useState(null)
    useEffect(() => {
        if (images.length > 0) {
            setReversed(images.reverse())
        }
    }, [images])
    return (
        <>
            {loading && <center><Image styles={{ marginTop: "45px" }} width={50} height={50} src="/preload.gif" alt="gif" /></center>}
            <section className={styles.container} >
                {!loading && reversed && reversed.map((pic, i) => {
                    const height = String(pic.image[i].height)[0]
                    const style = {
                        gridRow: `span ${height}`
                    }
                    return <div key={i} className={styles.gallery_container} style={style}>
                        <Price price={pic.price} />
                        <Link href={"/" + pic.id}>
                            <div className={styles.gallery_item}>
                                <figure className={styles.image}>
                                    <Image loading="lazy" objectFit="contain" layout="responsive" src={pic.image[i].url} alt="test" width={pic.image[i].width} height={pic.image[i].height} />
                                    <aside className={styles.image_title}>{pic.title}</aside>
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
