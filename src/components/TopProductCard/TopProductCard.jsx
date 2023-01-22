import React from 'react';
import styles from './TopProductCard.module.scss';
import product from '../../assets/TopProductCard/top_image.png';
import { Container } from '@mui/material';
import { useProductContext } from '../../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { get } from '../../API/axios';

const TopProductCard = (props) => {
  const {setProducts} = useProductContext();
  const navigate = useNavigate();
  const handleClick = ()=>{
      get(`/product/?category__title=${props?.items?.title}`).then((response)=>{
        response.data.results.length>0?setProducts(response.data.results):setProducts(false);
        navigate('/shop-layer');
      }).catch((error)=>{
        console.log("error Occured");
      })
  }
    return (
        <Container>
            <div className={styles["main"]} onClick={()=>handleClick()}>
                <div className={styles["top"]}>
                    <img src={product} alt="product" />
                </div>
                <p className={styles['mid']}>{props?.items?.title}</p>
                <p className={styles['bottom']}>Available: {props?.items?.products_count}</p>
            </div>
        </Container>
    )
}

export default TopProductCard