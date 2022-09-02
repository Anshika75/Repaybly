import React from 'react'
import StarRating from './StarRating'

export default function ProductCard(props) {
    return (
        <>
                <div className="relative m-5 flex flex-col justify-start items-center h-[400px] w-[240px] shadow-[0_15px_25px_rgba(0,0,0,0.075)] overflow-hidden rounded-sm transition-all duration-200 cursor-pointer hover:scale-110 bg-[#F8F8FF]">
                    <div className="grid w-full h-[150px] bg-red">
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" className='h-full w-full'/>
                    </div>
                    <div className="font-Raleway text-black text-lg text-center mt-7 font-semibold uppercase tracking-[2.5px]">{props.title}</div>
                    <div className="font-Raleway text-black text-xs text-center mt-1 font-light px-3">{props.desc}</div>
                    <div className="font-Raleway text-green text-lg text-center mt-3 font-semibold tracking-[0.5px]" style={{ color: props.color }}>{props.price}</div>
                    <div className="flex flex-row justify-center items-center text-gray-400">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <div className="absolute bottom-0 flex flex-row justify-center items-center mt-3 w-full h-12 font-Raleway text-xs font-extrabold text-[#f8f8ff] opacity-70 hover:opacity-100 transition-all" style={{ background: props.bg }}>ADD TO CART</div>
                    {/* <StarRating/> */}
                </div>
        </>
    )
}
