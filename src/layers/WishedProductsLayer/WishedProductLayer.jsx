import React, { useEffect } from 'react';
import BreadCrumbCard from '../../components/BreadCrumbCard/BreadCrumbCard';
import { Container } from '@mui/system';
import { useState } from 'react';
import { get } from '../../API/axios';
import ShopListCard from '../../components/ShopCard/ShopListCard';
import noWishlistImg from '../../assets/Cart/wishlist-empty.jpg';
const WishedProductLayer = () => {
  const [wishedProducts, setWishedProducts] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  useEffect(()=>{
    if(isLoading)
    get(`/product/wished-products/`).then((response)=>{
        if(response.status===200){
            setWishedProducts(response.data);
            setIsLoading(false);
        }
    })
  }, [isLoading])
  return (
    <>
        <BreadCrumbCard view="My WishLists" />
        <Container style={{marginTop:"10px"}}>
            {
                (wishedProducts && wishedProducts.length>0)?(
                    <>
                        {
                            wishedProducts?.map((item, index)=>{
                                return (
                                    <ShopListCard item={item} setIsLoading={setIsLoading} isLoading={isLoading} wishlist={true} key={index}/>
                                )
                            })
                        }
                    </>
                ):(
                    <>
                    <img src={noWishlistImg} alt="" />
                    </>
                )
            }
        </Container>
    </>
  )
}

export default WishedProductLayer