import React from 'react'
import CategoryCard from '../Common components/CategoryCard'
import { Categorylist } from '../../../Helpers/CategoryList'

export default function CategoryCardHolder() {
  return (
    <>
        <div className="flex flex-row flex-wrap justify-center items-center">
        {
          Categorylist.map((e) => {
            return <CategoryCard category={e.category} bg={e.bg} img={e.img} items={e.items} key={e.id} />
          })
        }
        </div>
    </>
  )
}
