import React from 'react'
import Category from '../Components/HomeComponents/Sections/Category'
import Landing from '../Components/HomeComponents/Sections/Landing'
import Product from '../Components/HomeComponents/Sections/Product'
import Testimonial from '../Components/HomeComponents/Sections/Testimonial'

export default function Home() {
  return (
    <>
        <Landing/>
        <Category/>
        <Product/>
        <Testimonial/>
    </>
  )
}
