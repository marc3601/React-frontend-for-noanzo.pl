import styles from "../styles/Gallery.module.css"

const Gallery = ({ images, loading }) => {
    return (
        <>
            {loading && <center><img src="/preload.gif" /></center>}
            <section className={styles.container}>
                {!loading && images.map((img, i) => {
                    return <div key={i} className={styles.gallery_container}>
                        <div className={styles.gallery_item}>
                            <figure className={styles.image}>
                                <img loading="lazy" src={img.download_url} />
                            </figure>
                        </div>
                    </div>
                })}
            </section>
        </>

    )
}

export default Gallery
