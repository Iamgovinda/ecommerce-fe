import React from 'react';
import { Grid, Container, Stack } from '@mui/material';
import TrendingProductCard from '../../components/TrendingProductCard/TrendingProductCard';
import ShopNowCard from '../../components/TrendingProductCard/ShopNowCard';
import ViewCollectionCard from '../../components/TrendingProductCard/ViewCollectionCard';
import MiniTrendingCard from '../../components/TrendingProductCard/MiniTrendingCard';

const TrendingProductLayer = () => {
    
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <div><TrendingProductCard /></div>
                </Grid>
                <Grid item xs={3}>
                    <div><TrendingProductCard /></div>
                </Grid>
                <Grid item xs={3}>
                    <div><TrendingProductCard /></div>
                </Grid>
                <Grid item xs={3}>
                    <div><TrendingProductCard /></div>
                </Grid>
                <Grid item xs={4.5}>
                    <ShopNowCard />
                </Grid>
                <Grid item xs={4.5}>
                    <ViewCollectionCard />
                </Grid>
                <Grid item xs={3} >
                    <Stack gap={3}>
                        <MiniTrendingCard />
                        <MiniTrendingCard />
                        <MiniTrendingCard />
                    </Stack>
                </Grid>
            </Grid>

        </Container>
    )
}

export default TrendingProductLayer