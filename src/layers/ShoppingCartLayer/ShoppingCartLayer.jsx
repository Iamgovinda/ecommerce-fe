import React from 'react';
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import CartTable from '../../components/CartTable/CartTable';
import { Container } from '@mui/system';
import { Grid, Box } from '@mui/material';
import CartTotal from '../../components/CartTable/CartTotal';
const ShoppingCartLayer = () => {
  return (
    <Box>
      <BreadCrumbCard view="shopping cart" />
      <Container sx={{marginTop:'5rem'}}>
        <Grid container gap={2}>
            <Grid item lg={7} sm={10}>
              <CartTable />
            </Grid>
            <Grid item lg={4}>
              <CartTotal/>
            </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ShoppingCartLayer