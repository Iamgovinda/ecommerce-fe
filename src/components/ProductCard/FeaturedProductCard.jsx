import React from 'react';
import styles from './FeaturedProductCard.module.scss';
const FeaturedProductCard = (props) => {
  return (
    <div className={styles['parent']}>
      <div className={styles['top']}>
        <img src={props.items.featured_image} alt="" />
      </div>
      <div className={styles['bottom']}>
        <p className={styles['a']}>{props.items.name}</p>
        <div className={styles['b']}>
          <div className={styles['b1']}></div>
          <div className={styles['b2']}></div>
          <div className={styles['b3']}></div>
        </div>
        <p className={styles['c']}>{props.items.code}</p>
        <p className={styles['d']}>{props.items.price}</p>
      </div>
    </div>
  )
}

export default FeaturedProductCard