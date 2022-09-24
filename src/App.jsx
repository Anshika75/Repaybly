import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import CategoryCard from './Components/HomeComponents/Common components/CategoryCard'
import ProductCard from './Components/HomeComponents/Common components/ProductCard'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Product from './Pages/Product'
import DeliveryCardHolder from './Components/DeliveryComponents/DeliveryCardHolder'

function App() {

  return (
    <>
      {/* <Home/> */}
      <DeliveryCardHolder/>
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <Product/> */}
      {/* <CategoryCard/>
      <ProductCard/> */}
    </>
  )
}

export default App
