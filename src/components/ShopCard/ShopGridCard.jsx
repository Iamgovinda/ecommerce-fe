import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import shopGridImage from "../../assets/Shops/shopImage.png";
import { Box } from '@mui/material';
import styles from './ShopGridCard.module.scss';

export default function ShopGridCard(props) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <Box className={styles['shop-image-parent']}>
                <img src={shopGridImage} alt="" />
            </Box>
            <CardContent className={styles['text-parent']}>
                <Typography className={styles['text-top']}>
                    Ultricies condimentum imperdiet
                </Typography>
                <Box className={styles['box-parent']}>
                    <Box className={styles['box-1']}></Box>
                    <Box className={styles['box-2']}></Box>
                    <Box className={styles['box-3']}></Box>
                </Box>
                <Typography className={styles['text-bottom']}>
                    <span className={styles['span-1']}>$26.00 </span><span className={styles['span-1']}>$42.00</span>
                </Typography>
            </CardContent>
        </Card>
    );
}