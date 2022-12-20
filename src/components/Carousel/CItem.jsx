import React from 'react';
import styles from './Item.module.scss';
import img1 from '../../assets/Carousel/candle.png';
import chair from '../../assets/Carousel/chair.png';
import backgroundImage from '../../assets/Carousel/back.png';
import discountBoard from '../../assets/Carousel/discount.png';
import { Button } from '@mui/material';


const Item = (props) => {
    return (
        <div className={styles['parent']}>
            <div className={styles['left']}>
                <div className={styles['bulb']}>
                    <img src={img1} alt="" className={styles['bulb_img']} />
                </div>
                <div className={styles['info']}>
                    <p className={styles['top_info']}>Best Furniture For Your Castle...</p>
                    <p className={styles['mid_info']}>New Furniture Collection Trends in 2020</p>
                    <p className={styles['bottom_info']}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus error iure et maiores deleniti est.</p>
                    <Button style={{ backgroundColor: "#FB2E86", width: "163px", height: "50px" }} variant="contained">Shop Now</Button>
                </div>
            </div>
            <div className={styles['right']}>
                <img src={backgroundImage} alt="backImage" className={styles['backgroundImage']} />
                <img src={chair} alt="chair" className={styles['chair']} />
                <img src={discountBoard} alt="" className={styles['discountBoard']} />
                <p className={styles['discount']}>
                    50%
                    off
                </p>
            </div>
        </div>
    )
}

export default Item