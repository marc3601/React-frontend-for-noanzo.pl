import React from 'react'
import Loupe from '../utilities/Loupe'
import styles from "../styles/Navigation.module.css"
const Navigation = () => {
    return (
        <div className={styles.navigation_section}>
            <div className={styles.logo}>LOGO</div>
            <div className={styles.search_container}>
                <div className={styles.search_wrapper}>
                    <Loupe />
                    <input className={styles.search_input} placeholder="Szukaj" />
                </div>
            </div>
        </div>
    )
}

export default Navigation
