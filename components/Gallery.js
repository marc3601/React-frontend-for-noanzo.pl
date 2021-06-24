import styles from "../styles/Gallery.module.css"
import Image from 'next/image'
import Link from "next/link"
const Gallery = ({ images, loading }) => {
    // console.log(images);
    return (
        <>
            {loading && <center><Image width={50} height={50} src="/preload.gif" alt="gif" /></center>}
            <section className={styles.container}>
                {!loading && images.map((pic, i) => {
                    return <div key={i} className={styles.gallery_container} >
                        <div className={styles.gallery_item}>
                            <Link href="/listing">
                                <figure className={styles.image}>
                                    <Image placeholder="blur" blurDataURL={pic.download_url} objectFit="cover" layout="responsive" loading="lazy" src={pic.download_url} alt="test" width={320} height={320} />
                                </figure>
                            </Link>
                        </div>
                    </div>
                })}
            </section>
        </>

    )
}

export default Gallery
