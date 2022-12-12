import { Route, Routes } from "react-router-dom";
import React from 'react';
import HomeLayer from "../layers/HomeLayer/HomeLayer";
import ShopListLayer from "../layers/ShopListLayer/ShopListLayer";
import UpperNavBar from "../components/NavBar/UpperNavBar";
const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeLayer />} />
        <Route path="/shop-list" element={<ShopListLayer/>} />
        <Route path="/upper-navbar" element={<UpperNavBar/>} />
    </Routes>
  )
}

export default Routers