import React from 'react';
import latest_product from '../../assets/ProductCard/latest_product.png';
import styles from './LatestProductCard.module.scss';
const LatestProductCard = () => {
    return (
        <div className={styles["parent"]}>
            <div className={styles["top"]}>
                <img src={latest_product} alt="latest product" />
            </div>
            <div className={styles["bottom"]}>
                <p>Comfort Handy Craft</p>
                <div className={styles["bottom_right"]}>
                    <p className={styles['current']}>$42.00</p>
                    <p><strike className={styles['initial']}>$65.00</strike></p>
                </div>

            </div>
        </div>
    )
}

export default LatestProductCard