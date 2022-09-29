import React from 'react'
import Order from '../Components/OrderSummaryComponents/Order'
import Header from '../Components/DeliveryComponents/Header'
import Heading from '../Components/HomeComponents/Common components/Heading'
import Footer from '../Components/HomeComponents/Sections/Footer'
export default function OrderSummary() {
  return (
    <>
        <Header/>
        <Order/>
        <Footer/>
    </>
  )
}
