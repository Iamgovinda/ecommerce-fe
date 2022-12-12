import { Route, Routes } from "react-router-dom";
import React from 'react';
import HomeLayer from "../layers/HomeLayer/HomeLayer";
import ShopListLayer from "../layers/ShopListLayer/ShopListLayer";
// import UpperNavBar from "../components/NavBar/UpperNavBar";
import LowerNavBar from "../components/NavBar/LowerNavBar";
import SearchBar from "../components/SearchBar/SearchBar";
const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/shop-list" element={<ShopListLayer/>} />
        <Route path="/lower-navbar" element={<SearchBar/>} />
    </Routes>
  )
}

export default Routers