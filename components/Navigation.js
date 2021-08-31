import React from 'react'
import Link from "next/link"
import Loupe from '../utilities/Loupe'
import styles from "../styles/Navigation.module.css"
const Navigation = () => {
    return (
        <>
            <div className={styles.navigation_section}>
                <Link href="/">
                    <div className={styles.logo}>ANZO</div>
                </Link>
                <div className={styles.search_container}>
                    <div className={styles.search_wrapper}>
                        <Loupe />
                        <input disabled className={styles.search_input} placeholder="Szukaj..." />
                    </div>

                </div>
            </div>
            {/* <div className={styles.tag_wrapper}>
                <span className={styles.tag}>#budydlapsow</span>
                <span className={styles.tag}>#budydlakotow</span>
            </div> */}
        </>
    )
}

export default Navigation
