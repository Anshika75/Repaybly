import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import CategoryCard from "./Components/HomeComponents/Common components/CategoryCard";
import ProductCard from "./Components/HomeComponents/Common components/ProductCard";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Product from "./Pages/Product";
// import { Route, Routes } from "react-router-dom";
import DeliveryCardHolder from "./Components/DeliveryComponents/DeliveryCardHolder";
import Deliver from "./Pages/Deliver";
import OrderSummary from "./Pages/OrderSummary";
import ProductDetail from "./Pages/ProductDetail";
function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes> */}
      {/* <Deliver/> */}
      {/* <OrderSummary/> */}
      <ProductDetail/>
      {/* <DeliveryCardHolder/> */}
      {/* <Product /> */}
      {/* <CategoryCard /> */}
      {/* <ProductCard /> */}
    </>
  );
}

export default App;
