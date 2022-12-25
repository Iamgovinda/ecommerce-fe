import React from 'react';

// import Button from '@mui/material/Button';
import styles from './TrendingProductCard.module.scss';
import trendingProduct from '../../assets/TrendingProduct/trending_product.png';
const TrendingProductCard = (props) => {
    return (
        <div className={styles["main"]}>
            <div className={styles["parent"]}>
                <div className={styles["img"]}>
                    <img src={props.item.image} alt="trending-product" />
                </div>
                <p className={styles["name"]}>{props.item.name}</p>
                <div className={styles["price"]}>
                    <p className={styles["discounted"]}>{props.item.initial_price}</p>
                    <p className={styles["initial"]}>{props.item.discounted_price}</p>
                </div>
            </div>
        </div>
    )
}

export default TrendingProductCard