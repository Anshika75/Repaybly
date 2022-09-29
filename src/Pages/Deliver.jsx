import React from 'react'
import DeliveryCardHolder from '../Components/DeliveryComponents/DeliveryCardHolder'
import Header from '../Components/DeliveryComponents/Header'
import Footer from '../Components/HomeComponents/Sections/Footer'

export default function Deliver() {
  return (
    <>
        <div className="flex flex-col h-full bg-[#E9E4F0]">
        <Header/>
        <DeliveryCardHolder/> 
        <Footer/>
        </div>
    </>
  )
}
