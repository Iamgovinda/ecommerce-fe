import { Route, Routes } from "react-router-dom";
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
import ProfileLayer from "../layers/ProfileLayer/ProfileLayer";
import OTP from "../components/OTP/OTP";
import OrderHistoryPage from "../components/OrderHistory/OrderHistoryPage";
import SearchPage from "../layers/SearchPage/SearchPage";
import WishedProductLayer from "../layers/WishedProductsLayer/WishedProductLayer";

const Routers = () => {
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
        <Route path="/profile" element={<ProfileLayer/>}/>
        <Route path="/verify-otp" element={<OTP/>}/>
        <Route path="/order-history" element={<OrderHistoryPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/my-wishlists" element={<WishedProductLayer/>}/>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </MasterLayer>
  )
}

export default Routers