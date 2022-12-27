import React from 'react';
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import { Box, Typography } from '@mui/material';
import orderCompletedImg from '../../assets/OrderCompleted/OrderCompleted.png';
import checkList from '../../assets/OrderCompleted/checklist.png';
import styles from './OrderCompleted.module.scss';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const OrderCompleted = () => {
    return (
        <>
            <BreadCrumbCard view="Order Completed" />

            <Container className={styles['order-completed-container']}>
                <Box className={styles['order-completed-box']}>
                    <img src={orderCompletedImg} alt="" height={50} className={styles['img-top']}/>
                    <Box className={styles['done-icon-box']}>
                        <VerifiedIcon sx={{ fontSize: '2rem', color: "#FF1788" }} />
                    </Box>
                    <Typography className={styles['top-text']}>
                        Your Order Is Completed!
                    </Typography>
                    <Typography className={styles['mid-text']}> Thank you for your order! Your order is being processed and will be completed within 3-6
                        hours. You will receive an email confirmation when your order is completed.
                    </Typography>
                    <Button className={styles['btn']}>
                        Continue Shopping
                    </Button>
                    <img src={checkList} alt="" height={50} className={styles['img-down']}/>

                </Box>
            </Container>
        </>

    )
}

export default OrderCompleted