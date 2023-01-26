import React, { useEffect } from 'react';
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import { Box } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';
import { get } from '../../API/axios';
import ProductDetailCard from '../../components/ProductDetailCard/ProductDetailCard';
import LatestProductCard from '../../components/ProductCard/LatestProductCard';
import ShopListCard from '../../components/ShopCard/ShopListCard';
const WishedProductLayer = () => {
  const [wishedProducts, setWishedProducts] = useState([]);
  useEffect(()=>{
    get(`/product/wished-products/`).then((response)=>{
        if(response.status===200){
            setWishedProducts(response.data);
        }
    })
  }, [])
  console.log(wishedProducts);
  return (
    <>
        <BreadCrumbCard view="My WishLists" />
        <Container marginTop={4}>
            {
                (wishedProducts && wishedProducts.length>0)?(
                    <>
                        {
                            wishedProducts?.map((item)=>{
                                return (
                                    <ShopListCard item={item}/>
                                )
                            })
                        }
                    </>
                ):(
                    <>
                    No
                    </>
                )
            }
        </Container>
    </>
  )
}

export default WishedProductLayer