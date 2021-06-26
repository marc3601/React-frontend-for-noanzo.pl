import { useEffect } from "react"
import styles from "../styles/Gallery.module.css"
import Image from 'next/image'
import Link from "next/link"
const Gallery = ({ images, loading, query, handler }) => {

    useEffect(() => {
        const filtered = images.filter((item) => item.author !== query)
        handler && handler(filtered)
    }, [query])


    return (
        <>
            {loading && <center><Image width={50} height={50} src="/preload.gif" alt="gif" /></center>}
            <section className={styles.container} >
                {!loading && images.map((pic, i) => {
                    return <div key={i} className={styles.gallery_container} >
                        <Link href={"/" + pic.author}>
                            <div className={styles.gallery_item}>
                                <figure className={styles.image}>
                                    <Image objectFit="cover" layout="responsive" src={pic.download_url} alt="test" width={340} height={310} />
                                    <aside className={styles.image_title}>{pic.author}</aside>
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
