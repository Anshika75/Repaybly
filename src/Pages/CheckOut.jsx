import React from 'react'
import Check from '../Components/CheckOut Components/Check'
import MainHeader from '../Components/SiteComponents/Header'

export default function CheckOut() {
  return (
    <>
        <div className="flex flex-col h-full w-full items-center bg-[#E9E4F0]">
            <MainHeader/>
            <Check/>
        </div>
    </>
  )
}
