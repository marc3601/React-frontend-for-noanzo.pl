import React from 'react'
import styles from "../styles/Price.module.css"
const Price = ({ price }) => {
    return (
        <div className={styles.card_price}>{price} zł.</div>
    )
}

export default Price
