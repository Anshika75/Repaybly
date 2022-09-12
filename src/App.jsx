import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import CategoryCard from "./Components/HomeComponents/Common components/CategoryCard";
import ProductCard from "./Components/HomeComponents/Common components/ProductCard";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Product from "./Pages/Product";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Product />
      {/* <CategoryCard /> */}
      {/* <ProductCard /> */}
    </>
  );
}

export default App;
