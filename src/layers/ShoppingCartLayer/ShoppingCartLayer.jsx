import React, {useState, useEffect} from 'react';
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import CartTable from '../../components/CartTable/CartTable';
import { Container } from '@mui/system';
import { Grid, Box } from '@mui/material';
import CartTotal from '../../components/CartTable/CartTotal';
import { get } from '../../API/axios';
import impty_order_image from '../../assets/Cart/empty_cart.png';
const ShoppingCartLayer = () => {
  const [isLoading, SetIsLoading] = useState(true);
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
      if (isLoading) {
          get(`/order/`).then((response) => {
              setOrderData(response?.data?.results);
              SetIsLoading(false);
          })
      }
  }, [isLoading, orderData])

  const list_of_price = []
  const make_list_of_price = orderData.map((item) => {
      return list_of_price.push(
          (item?.product?.base_price - item?.product?.discount_price)*item?.quantity
      )
  })
  const sum_of_price = list_of_price.reduce((total, price) => total + price, 0);
  // console.log(list_of_price, sum_of_price, orderData);
  return (
    <Box>
      <BreadCrumbCard view="shopping cart" />
      <Container sx={{marginTop:'5rem'}}>
        {
          (orderData && orderData.length>0)?(
            <Grid container gap={2}>
            <Grid item lg={7} sm={10}>
              <CartTable item={orderData} setIsLoading={SetIsLoading}/>
            </Grid>
            <Grid item lg={4}>
              <CartTotal sum = {sum_of_price}/>
            </Grid>
        </Grid>
          ):(
            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <img src={impty_order_image} alt="no order" />
            </div>
          )
        }
      </Container>
    </Box>
  )
}

export default ShoppingCartLayer