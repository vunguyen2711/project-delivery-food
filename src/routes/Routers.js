import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  AllFood,
  FoodDetails,
  Cart,
  Checkout,
  Contact,
  Login,
  Register,
  PageError,
} from "../pages";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFood />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<PageError />} />
    </Routes>
  );
};

export default Routers;
