import styles from "../styles/Gallery.module.css"
import Image from 'next/image'
import Link from "next/link"
import Price from "../utilities/Price"
const Gallery = ({ images, loading }) => {

    return (
        <>
            {loading && <center><Image styles={{ paddingTop: "45px" }} width={50} height={50} src="/preload.gif" alt="gif" /></center>}
            <section className={styles.container} >
                {!loading && images && images.map((pic, i) => {
                    return <div key={i} className={styles.gallery_container}  >
                        <Price price={100} />
                        <Link href={"/" + pic.urlParam}>
                            <div className={styles.gallery_item}>
                                <figure className={styles.image}>
                                    <Image objectFit="cover" layout="responsive" src={pic.url} alt="test" width={510} height={480} />
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
