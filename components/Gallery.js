import styles from "../styles/Gallery.module.css"
import Image from 'next/image'
import Link from "next/link"
import Price from "../utilities/Price"
const Gallery = ({ images, loading }) => {

    return (
        <>
            {loading && <center><Image styles={{ paddingTop: "25px" }} width={50} height={50} src="/preload.gif" alt="gif" /></center>}
            <section className={styles.container} >
                {!loading && images && images.map((pic, i) => {
                    return <div key={i} className={styles.gallery_container} >
                        <Price price={pic.id} />
                        <Link href={"/" + pic.id}>
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
