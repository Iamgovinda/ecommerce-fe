import React from 'react';
import { Box, Grid, Stack, Container } from '@mui/material';
import miniPDI from '../../assets/ProductDetailCard/product_detail.png';
import mainPDI from '../../assets/ProductDetailCard/mpd.png';
import styles from './ProductDetailCard.module.scss';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Typography } from '@mui/material';
const ProductDetailCard = () => {
    return (
        <Container className={styles['top']}>
            <Grid container spacing={'1rem'} justifyContent="flex-start">
                <Grid item lg={2} md={4} sm={6} display="flex" direction="column">
                    <Stack gap={2}>
                        <img src={miniPDI} alt="mini_pdi" height={151} width={155} />
                        <img src={miniPDI} alt="mini_pdi" height={151} width={155} />
                        <img src={miniPDI} alt="mini_pdi" height={151} width={155} />
                    </Stack>
                </Grid>
                <Grid item lg={4}>
                    <img src={mainPDI} alt="mini_pdi" />
                </Grid>
                <Grid item lg={5} display="flex" direction={'column'} justifyContent={'center'} marginLeft="1rem">
                    <Box>
                        <Typography className={styles['text-1']}>Playwood arm chair</Typography>
                        <StarOutlineIcon fontSize='sm'/> <StarOutlineIcon fontSize='sm'/> <StarOutlineIcon fontSize='sm'/> <StarOutlineIcon fontSize='sm'/> <StarOutlineIcon fontSize='sm'/>
                    </Box>
                    <Box>
                        <span className={styles['initial-price']}>$32.00</span>  <span className={styles['discounted-price']}>$32.00</span>
                    </Box>
                    <Typography className={styles['text-common']}>
                        Color
                    </Typography>
                    <Typography className={styles['text-description']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.s
                    </Typography>
                    <Box display={'flex'} alignItems="center" gap={6} >
                        <span className={styles['text-common']}>Add To cart</span> <FavoriteBorderOutlined fontSize='sm' />
                    </Box>
                    <Typography className={styles['text-common']}>
                        Categories:
                    </Typography>
                    <Typography className={styles['text-common']}>
                        Tags
                    </Typography>
                    <Box display={'flex'} alignItems="center" gap={2}>
                        <span className={styles['text-common']}>
                            Share
                        </span>
                        <FacebookIcon fontSize='sm'/> <InstagramIcon fontSize='sm'/> <TwitterIcon fontSize='sm'/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDetailCard