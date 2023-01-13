import React from 'react';
import styles from './LatestProductCard.module.scss';
import latest_product from '../../assets/ProductCard/latest_product.png';
import { useNavigate } from "react-router-dom";

const LatestProductCard = (props) => {

    const navigate = useNavigate();
    const viewDetails = (uuid) => {
        navigate('/product-details/' + uuid);
    }
    return (
        <div className={styles["parent"]} onClick={() => viewDetails(props?.item?.uuid)}>
            <div className={styles["top"]}>
                <img src={props?.item?.images[0]?.file ?? latest_product} alt="latest product" style={{maxHeight:'11rem', maxWidth:'11rem'}}/>
            </div>
            <div className={styles["bottom"]}>
                <p>{props?.item?.name}</p>
                <div className={styles["bottom_right"]}>
                    <p className={styles['current']}>{props?.item?.base_price - props?.item?.discount_price}</p>
                    <p className={styles['initial']}>{props?.item?.base_price}</p>
                </div>
            </div>
        </div>
    )
}

export default LatestProductCard