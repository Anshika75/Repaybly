import React from 'react'
import CategoryCard from '../Common components/CategoryCard'
import Heading from '../Common components/Heading'
import CategoryCardHolder from '../Uncommon Components/CategoryCardHolder'

export default function Category() {
  return (
    <>
      <div className='flex flex-col justify-center items-center py-20'>
        <Heading title="Categories" subtitle="Shop what you like" />
        <CategoryCardHolder />
      </div>
    </>
  )
}
