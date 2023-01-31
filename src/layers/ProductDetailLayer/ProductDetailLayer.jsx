import React, {useEffect, useState} from 'react'
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard';
import ProductDescriptionCard from '../../components/ProductDescriptionCard/ProductDescriptionCard';
import RelatedProductCard from '../../components/RelatedProductCard/RelatedProductCard';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';
// import cloth from "../../assets/ProductDetailCard/cloth.png";
import {Container} from '@mui/material';
import styles from './ProductDetail.module.scss';
import { get } from '../../API/axios';
import TrendingProductCard from '../../components/TrendingProductCard/TrendingProductCard';

const ProductDetailLayer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [productDetail, setProductDetail] = useState();
    const [productRatings, setProductRatings] = useState();

    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(()=>{
        if(isLoading){
        get(`/product/${productDetail?.uuid}/related-products/`).then((response)=>{
            if(response.status===200){
                setRelatedProducts(response.data);
            }
        })
        get(`/product/${productDetail?.uuid}/product-ratings/`).then((response)=>{
            if(response.status===200){
                setProductRatings(response.data);
            }
        })
    }
    }, [productDetail, isLoading])
    // const related_products = [
    //     {
    //         'image': cloth,
    //         'name': 'Top Wall Digital Clock',
    //         'price': '$43.00'
    //     },
    //     {
    //         'image': cloth,
    //         'name': 'Top Wall Digital Clock',
    //         'price': '$43.00'
    //     },
    //     {
    //         'image': cloth,
    //         'name': 'Top Wall Digital Clock',
    //         'price': '$43.00'
    //     },
    //     {
    //         'image': cloth,
    //         'name': 'Top Wall Digital Clock',
    //         'price': '$43.00'
    //     }
    // ]
    return (
        <>
            <BreadCrumbCard view={"Product Detail"} />
            <Stack gap={10}>
                <ProductDetailCard  setProductDetail={setProductDetail} setIsLoading={setIsLoading} isLoading={isLoading}/>
                <ProductDescriptionCard productDetail={productDetail} productRatings={productRatings}/>
                <Container className={styles['rel-product-container']}>
                    <Grid container spacing={0}>
                        {
                            relatedProducts.map((item, index) => {
                                return (
                                    <Grid item key={index} sm={6} md={4} lg={3}>
                                        <TrendingProductCard item={item} />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Stack>

        </>
    )
}

export default ProductDetailLayer