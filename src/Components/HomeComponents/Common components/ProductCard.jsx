import React from 'react'
import StarRating from './StarRating'

export default function ProductCard() {
    return (
        <>
            <div className="grid place-items-center h-screen">
                <div className="flex flex-col justify-start items-center h-[350px] w-[200px] bg-slate-400 shadow-[0_15px_25px_rgba(0,0,0,0.075)] rounded-md">
                    <div className="grid w-full h-[150px] bg-red"></div>
                    <div className="font-Raleway text-black text-lg text-center mt-7 font-semibold uppercase tracking-[2.5px]">Lorem</div>
                    <div className="font-Raleway text-black text-xs text-center mt-1 font-light px-3">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</div>
                    <div className="font-Raleway text-red text-lg text-center mt-3 font-semibold tracking-[0.5px]">Rs. 100</div>
                    {/* <StarRating/> */}
                </div>
            </div>
        </>
    )
}
