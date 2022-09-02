import React from 'react'
import ProductCard from '../Common components/ProductCard'
import { Productlist } from '../../../Helpers/ProductList'

export default function ProductCardHolder() {
  return (
    <>
        <div className="flex flex-row flex-wrap justify-center items-center">
        {
          Productlist.map((e) => {
            return <ProductCard title={e.title} bg={e.bg} color={e.color} img={e.img} price={e.price} desc={e.desc} key={e.id} />
          })
        }
        </div>
    </>
  )
}
