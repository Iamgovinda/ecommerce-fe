import React from 'react';
import { Grid, Container, Stack } from '@mui/material';
import TrendingProductCard from '../../components/TrendingProductCard/TrendingProductCard';
import ShopNowCard from '../../components/TrendingProductCard/ShopNowCard';
import ViewCollectionCard from '../../components/TrendingProductCard/ViewCollectionCard';
import MiniTrendingCard from '../../components/TrendingProductCard/MiniTrendingCard';
import trendingProduct from '../../assets/TrendingProduct/trending_product.png';
import './TrendingProductLayer.scss';

const TrendingProductLayer = (props) => {

    const trending_products = [
        {
            'image': trendingProduct,
            'name': 'Cantilever chair',
            'initial_price': '$26.00',
            'discounted_price': '$42.00'

        },
        {
            'image': trendingProduct,
            'name': 'Cantilever chair',
            'initial_price': '$26.00',
            'discounted_price': '$42.00'

        },
        {
            'image': trendingProduct,
            'name': 'Cantilever chair',
            'initial_price': '$26.00',
            'discounted_price': '$42.00'

        },
        {
            'image': trendingProduct,
            'name': 'Cantilever chair',
            'initial_price': '$26.00',
            'discounted_price': '$42.00'

        }
    ]

    return (
        <Container>
            <Grid container justifyContent='flex-start' spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        props.item.map((item, index) => {
                            return (
                                <Grid item xs={3} key={index}>
                                    <TrendingProductCard item={item} />
                                </Grid>
                            )
                        })
                    }

                </Grid>
            {/* <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} className='grid_bottom'>
                <Grid item>
                    <ShopNowCard />
                </Grid>
                <Grid item>
                    <ViewCollectionCard />
                </Grid>
                <Grid item>
                    <Stack gap={3}>
                        <MiniTrendingCard />
                        <MiniTrendingCard />
                        <MiniTrendingCard />
                    </Stack>
                </Grid>
            </Grid> */}

        </Container>
    )
}

export default TrendingProductLayer