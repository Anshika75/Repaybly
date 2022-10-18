import React from 'react'
import Form from '../Components/CheckoutForm Components/Form'
import MainHeader from '../Components/SiteComponents/Header'

export default function CheckOutForm() {
  return (
    <>
        <div className="flex flex-col h-full w-full items-center bg-[#E9E4F0]">
            <MainHeader/>
            <Form/>
        </div>
    </>
  )
}
