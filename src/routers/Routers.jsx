import { Route, Routes, useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import HomeLayer from "../layers/HomeLayer/HomeLayer";
import MasterLayer from "../layers/MasterLayer";
import ShopGridLayer from "../layers/ShopLayer/ShopLayer";
import ProductDetailLayer from "../layers/ProductDetailLayer/ProductDetailLayer";
import ShoppingCartLayer from "../layers/ShoppingCartLayer/ShoppingCartLayer";
import OrderCompleted from "../layers/OrderCompleted/OrderCompleted";
import ShippingFormLayer from "../layers/ShippingFormLayer/ShippingFormLayer";
import LoginLayer from "../layers/LoginLayer/LoginLayer";
import AboutUsLayer from "../layers/AboutUsLayer/AboutUsLayer";
import ContactUsLayer from "../layers/ContactUsLayer/ContactUsLayer";
import PageNotFound from "../layers/PageNotFoundLayer/PageNotFound";
import FAQLayer from "../layers/FAQ/FAQLayer";
import RegisterLayer from "../layers/RegisterLayer/RegisterLayer";
import { useUserContext } from "../context/UserContext";
import { get } from "../API/axios";
import { toast } from "react-toastify";

const Routers = () => {
  let {slug} = useParams();
  const { user, setUserData } = useUserContext();
  const isAuthed = localStorage.getItem("token");

  useEffect(() => {
    if (!user && isAuthed) {
      get(`/user/me/`)
        .then((response) => {
          setUserData(response.data);
        })
        .catch((err) => {
          toast.error("Couldn't fetch user.");
        });
    }
    //eslint-disable-next-line
  }, [user, isAuthed]);
  return (
    <MasterLayer>
      <Routes>
        <Route path="/" element={<HomeLayer />} />
        <Route path="/shop-layer" element={<ShopGridLayer/>} />
        <Route path="/product-details/:slug" element={<ProductDetailLayer />} />
        <Route path="/shopping-cart" element={<ShoppingCartLayer />} />
        <Route path="/order-completed" element={<OrderCompleted/>}/>
        <Route path="/shipping-detail" element={<ShippingFormLayer />}/>
        <Route path="/login" element= {<LoginLayer />} />
        <Route path="/register" element= {<RegisterLayer />} />
        <Route path="/about" element= {<AboutUsLayer />} />
        <Route path="/contact-us" element={<ContactUsLayer />} />
        <Route path="/FAQ" element={<FAQLayer/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </MasterLayer>
  )
}

export default Routers