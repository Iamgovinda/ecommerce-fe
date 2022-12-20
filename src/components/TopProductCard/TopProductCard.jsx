import React from 'react';
import styles from './TopProductCard.module.scss';
import product from '../../assets/TopProductCard/top_image.png';
import { Container } from '@mui/material';

const TopProductCard = () => {
    return (
        <Container>
            <div className={styles["main"]}>
                <div className={styles["top"]}>
                    <img src={product} alt="product" />
                </div>
                <p className={styles['mid']}>Mini LCW Chair</p>
                <p className={styles['bottom']}>$56.00</p>
            </div>
        </Container>
    )
}

export default TopProductCard