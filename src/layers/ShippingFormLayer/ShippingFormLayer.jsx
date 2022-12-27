import React from 'react';
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import ShippingDetailForm from '../../components/ShippingDetail/ShippingDetailForm';
import { Container, Grid, Stack, Box } from '@mui/material';
import ProductView from '../../components/CartTable/ProductView';
import styles from './ShippingFormLayer.module.scss';
import CartTotal from '../../components/CartTable/CartTotal';
const ShippingFormLayer = () => {
  const data = [{ name: 'UT diam consequat', color: 'Brown', size: 'XXL', price: '$49.00' }, { name: 'UT diam consequat', color: 'Brown', size: 'XXL', price: '$49.00' },
  { name: 'UT diam consequat', color: 'Brown', size: 'XXL', price: '$49.00' }, { name: 'UT diam consequat', color: 'Brown', size: 'XXL', price: '$49.00' }, { name: 'UT diam consequat', color: 'Brown', size: 'XXL', price: '$49.00' },]
  return (
    <>
      <BreadCrumbCard view="Shipping Detail Form" />
      <Container sx={{ padding: "4rem 0 4rem 0" }}>
        <Grid container spacing={3} justifyContent='center'>
          <Grid item lg={8} md={6}>
            <ShippingDetailForm />
          </Grid>
          <Grid item lg={4} md={4}>
            <Stack>
              {
                data.map((item, index) => {
                  return (
                    <Box className={styles['product-list']}>
                      <ProductView item={item} key={index} displayCloseBtn={false} />
                      <p>{item.price}</p>
                    </Box>
                  )
                })
              }
            </Stack>
            <CartTotal />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ShippingFormLayer;