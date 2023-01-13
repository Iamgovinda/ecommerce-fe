import React from 'react'
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard';
import ProductDescriptionCard from '../../components/ProductDescriptionCard/ProductDescriptionCard';
import RelatedProductCard from '../../components/RelatedProductCard/RelatedProductCard';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material';
import cloth from "../../assets/ProductDetailCard/cloth.png";
import {Container} from '@mui/material';
import styles from './ProductDetail.module.scss';

const ProductDetailLayer = () => {
    const related_products = [
        {
            'image': cloth,
            'name': 'Top Wall Digital Clock',
            'price': '$43.00'
        },
        {
            'image': cloth,
            'name': 'Top Wall Digital Clock',
            'price': '$43.00'
        },
        {
            'image': cloth,
            'name': 'Top Wall Digital Clock',
            'price': '$43.00'
        },
        {
            'image': cloth,
            'name': 'Top Wall Digital Clock',
            'price': '$43.00'
        }
    ]
    return (
        <>
            <BreadCrumbCard view={"Product Detail"} />
            <Stack gap={10}>
                <ProductDetailCard />
                <ProductDescriptionCard />
                <Container className={styles['rel-product-container']}>
                    <Grid container spacing={0}>
                        {
                            related_products.map((item, index) => {
                                return (
                                    <Grid item key={index} sm={6} md={4} lg={3}>
                                        <RelatedProductCard item={item} />
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