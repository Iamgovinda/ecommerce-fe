import { Route, Routes } from "react-router-dom";
import React from 'react';
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
import OTPInputLayer from "../layers/otpInputLayer/otp";
const Routers = () => {
  return (
    <MasterLayer>
      <Routes>
        <Route path="/" element={<HomeLayer />} />
        <Route path="/shop-layer" element={<ShopGridLayer/>} />
        <Route path="/product-details" element={<ProductDetailLayer />} />
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