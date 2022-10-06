import React from 'react'
import Heading from '../Components/HomeComponents/Common components/Heading'
import Detail from '../Components/ProductDetail Components/Detail'
import MainHeader from '../Components/SiteComponents/Header'

export default function ProductDetail() {
  return (
    <>
        <div className="flex flex-col items-center justify-center w-full bg-[#D3CCE3]">
        <MainHeader/>
        <Detail/>
        </div>
    </>
  )
}
