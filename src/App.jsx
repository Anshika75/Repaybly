import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";

import Deliver from "./Pages/Deliver";
import CategoryCard from "./Components/HomeComponents/Common components/CategoryCard";
import ProductCard from "./Components/HomeComponents/Common components/ProductCard";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import OrderSummary from "./Pages/OrderSummary";
import { Route, Routes } from "react-router-dom";
import CheckOut from "./Pages/CheckOut";
import CheckOutForm from "./Pages/CheckOutForm";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes> */}
      {/* <Home/> */}
      {/* <Product /> */}
      {/* <CategoryCard /> */}
      {/* <ProductCard /> */}
      {/* <ProductDetail/> */}
      {/* <OrderSummary/> */}
      {/* <CheckOut/> */}
      {/* <Deliver/> */}
      <CheckOutForm/>
    </>
  );
}

export default App;
