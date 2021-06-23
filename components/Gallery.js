import styles from "../styles/Gallery.module.css"
import Image from 'next/image'
const Gallery = ({ images, loading }) => {
    return (
        <>
            {loading && <center><img src="/preload.gif" /></center>}
            <section className={styles.container}>
                {!loading && images.map((img, i) => {
                    return <div key={i} className={styles.gallery_container}>
                        <div className={styles.gallery_item}>
                            <figure className={styles.image}>
                                <Image loading="lazy" src={img.download_url} alt="test" width={320} height={320} />
                            </figure>
                        </div>
                    </div>
                })}
            </section>
        </>

    )
}

export default Gallery
