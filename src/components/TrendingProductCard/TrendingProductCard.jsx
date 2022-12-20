import React from 'react';

// import Button from '@mui/material/Button';
import styles from './TrendingProductCard.module.scss';
import trendingProduct from '../../assets/TrendingProduct/trending_product.png';
const TrendingProductCard = () => {
    return (
        <div className={styles["main"]}>
            <div className={styles["parent"]}>
                <div className={styles["img"]}>
                    <img src={trendingProduct} alt="trending-product" />
                </div>
                <p className={styles["name"]}>Cantilever chair</p>
                <div className={styles["price"]}>
                    <p className={styles["discounted"]}>$26.00</p>
                    <p className={styles["initial"]}>$42.00</p>
                </div>
            </div>
        </div>
    )
}

export default TrendingProductCard