import React from 'react';
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import ShopGridCard from '../../components/ShopCard/ShopGridCard';
import styles from './SearchPage.module.scss';
import noProductFoundImg from '../../assets/ProductCard/no-product-found.png';
import { useLocation } from 'react-router-dom';
import { get } from '../../API/axios';
import { useState, useEffect } from 'react';


const SearchPage = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const type = location.state.type;
    const text = location.state.text;
    useEffect(()=>{
        if(type==="search"){
            get(`/product/?search=${text}`).then((response)=>{
                if(response.status===200){
                    setProducts(response.data?.results);
                }
            })
        }
        else if(type==="category"){
            get(`/product/?category__title=${text}`).then((response)=>{
                if(response.status===200){
                    setProducts(response.data?.results);
                }
            })
        }
    }, [type, text])
    return (
        <>
            <BreadCrumbCard view={type.toUpperCase() + "--->" + text} />
            <Container Container className={styles['container']} >
                {
                    (products.length<1) ? (
                        <>
                            <img src={noProductFoundImg} alt="" />
                        </>
                    ) : (
                        <Grid container spacing={2}>
                            {
                                products && products?.map((item, index) => {
                                    return (
                                        <Grid item key={index} lg={3} md={4} sm={8}>
                                            <ShopGridCard item={item} key={index} />
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )
                }
            </Container>
        </>
    )

}
export default SearchPage