import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Button, Stack } from '@mui/material';
import styles from './CartTotal.module.scss';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const CartTotal = () => {
    return (
        <Stack gap={5}>
            <Typography className={styles['cart-topic']}> Cart Totals</Typography>
            <Stack className={styles['stack-element']} gap={5} borderRadius={3}>
                <Box className={styles['stack-texts-box']}>
                    <span>Subtotals:</span> <span>£219.00</span>
                </Box>
                <Box className={styles['stack-texts-box']}>
                    <span>Totals:</span> <span>£325.00</span>
                </Box>
                <Box className={styles['stack-confirmation']}>
                    <CheckCircleRoundedIcon className={styles['icon']} fontSize='sm'/><span>Shipping & taxes calculated at checkouts</span>
                </Box>
                <Button variant={'contained'} className={styles['btn']}>Proceed To Checkout</Button>
            </Stack>
        </Stack>
    )
}

export default CartTotal