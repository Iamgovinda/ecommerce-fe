import React from 'react';
import styles from './LatestProductCard.module.scss';
const LatestProductCard = (props) => {
    return (
            <div className={styles["parent"]}>
                <div className={styles["top"]}>
                    <img src={props.item.image} alt="latest product" />
                </div>
                <div className={styles["bottom"]}>
                    <p>{props.item.name}</p>
                    <div className={styles["bottom_right"]}>
                        <p className={styles['current']}>{props.item.current_price}</p>
                        <p className={styles['initial']}>{props.item.initial_price}</p>
                    </div>
                </div>
            </div>
    )
}

export default LatestProductCard