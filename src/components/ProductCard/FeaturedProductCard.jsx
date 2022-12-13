import React from 'react';
import product from '../../assets/ProductCard/product.png';
import styles from './FeaturedProductCard.module.scss';
const FeaturedProductCard = () => {
  return (
    <div className={styles['parent']}>
      <div className={styles['top']}>
        <img src={product} alt="" />
      </div>
      <div className={styles['bottom']}>
        <p className={styles['a']}>Cantilever chair</p>
        <p className={styles['b']}>Code - Y523201</p>
        <p className={styles['c']}>$42.00</p>
      </div>
    </div>
  )
}

export default FeaturedProductCard