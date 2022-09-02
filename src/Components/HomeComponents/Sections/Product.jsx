import React from 'react'
import ProductCard from '../Common components/ProductCard'
import Heading from '../Common components/Heading'
import ProductCardHolder from '../Uncommon Components/ProductCardHolder'

export default function Product() {
  return (
    <>
      <div className='flex flex-col justify-center items-center py-20'>
        <Heading title="Top Picks" subtitle="Specially For You" />
        <ProductCardHolder />
      </div>
    </>
  )
}
