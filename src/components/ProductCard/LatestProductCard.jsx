import React from 'react';
import styles from './LatestProductCard.module.scss';
const LatestProductCard = (props) => {
    return (
            <div className={styles["parent"]}>
                <div className={styles["top"]}>
                    <img src={props.image} alt="latest product" />
                </div>
                <div className={styles["bottom"]}>
                    <p>{props.name}</p>
                    <div className={styles["bottom_right"]}>
                        <p className={styles['current']}>{props.current_price}</p>
                        <p className={styles['initial']}>{props.initial_price}</p>
                    </div>

                </div>
            </div>
    )
}

export default LatestProductCard