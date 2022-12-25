import { Route, Routes } from "react-router-dom";
import React from 'react';
import HomeLayer from "../layers/HomeLayer/HomeLayer";
import MasterLayer from "../layers/MasterLayer";
import ShopGridLayer from "../layers/ShopLayer/ShopLayer";
import ProductDetailLayer from "../layers/ProductDetailLayer/ProductDetailLayer";
const Routers = () => {
  return (
    <MasterLayer>
      <Routes>
        <Route path="/" element={<HomeLayer />} />
        <Route path="/shop-layer" element={<ShopGridLayer/>} />
        <Route path="/product-details" element={<ProductDetailLayer />} />
      </Routes>
    </MasterLayer>
  )
}

export default Routers