import React, { useEffect, useState } from 'react';
import styles from './OrderHistoryCard.module.scss';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import { get } from '../../API/axios';


const OrderHistoryCard = () => {
    const [recentOrders, setRecentOrders] = useState([]);

    useEffect(() => {
        get(`/order/recent-orders/`).then((response) => {
            if (response.status === 200) {
                setRecentOrders(response.data.slice(0,4));
            }
        })
    }, [])
    return (
        <>
            <Box className={styles['profile-info-main']}>
                <p className={styles['profile-info-title']}>My Order Histories</p>
                <Grid container className={styles['info']} spacing={1}>
                    <Grid item className={styles['info-title']} lg={1}>
                        <p>SN</p>
                    </Grid>
                    <Grid item className={styles['info-title']} lg={3}>
                        <p>Product Name</p>
                    </Grid>
                    <Grid item className={styles['info-title']} lg={2}>
                        <p>Code</p>
                    </Grid>
                    <Grid item className={styles['info-title']} lg={1.5}>
                        <p>Price</p>
                    </Grid>
                    <Grid item className={styles['info-title']} lg={2}>
                        <p>Ordered at</p>
                    </Grid>
                    <Grid item className={styles['info-title']} lg={2}>
                        <p>Status</p>
                    </Grid>
                </Grid>
                <Grid container className={styles['info']} spacing={1}>
                    {
                        recentOrders.map((item, index) => {
                            return (
                                <>
                                    <Grid item className={styles['info-detail']} lg={1}>
                                        <p>{index+1}</p>
                                    </Grid>
                                    <Grid item className={styles['info-detail']} lg={3}>
                                        <p>{item?.product?.name}</p>
                                    </Grid>
                                    <Grid item className={styles['info-detail']} lg={2}>
                                        <p>{item?.product?.code}</p>
                                    </Grid>
                                    <Grid item className={styles['info-detail']} lg={1.5}>
                                        <p>Rs {item?.product?.base_price - item?.product?.discount_price}</p>
                                    </Grid>
                                    <Grid item className={styles['info-detail']} lg={2}>
                                        <p>{item?.updated_at}</p>
                                    </Grid>
                                    <Grid item className={styles['info-detail']} lg={2}>
                                        <p>{(item?.status).charAt(0).toUpperCase() + (item?.status).slice(1).toLowerCase()}</p>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
            </Box>

        </>
    )
}

export default OrderHistoryCard