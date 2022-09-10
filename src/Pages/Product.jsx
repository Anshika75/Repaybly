import React from 'react'
import MainProducCard from '../Components/ProductComponents/MainProducCard'
import ProductNavbar from '../Components/ProductComponents/ProductNavbar'

export default function Product() {
    return (
        <>
            <ProductNavbar/>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex justify-evenly flex-wrap -m-4">
                        <MainProducCard/>
                        <MainProducCard/>
                        <MainProducCard/>
                        <MainProducCard/>
                        <MainProducCard/>
                        <MainProducCard/>

                    </div>
                </div>
            </section>
        </>
    )
}
