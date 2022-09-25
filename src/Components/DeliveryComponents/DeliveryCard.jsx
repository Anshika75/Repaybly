import React from 'react'
// import StarRating from './StarRating'

export default function DeliveryCard(props) {
    return (
        <>
                <div className="relative m-5 flex flex-col justify-start items-center h-[450px] w-[240px] shadow-[0_15px_25px_rgba(0,0,0,0.075)] overflow-hidden rounded-sm transition-all duration-200 cursor-pointer hover:scale-110 bg-[#F8F8FF]">
                    <div className="grid w-full h-[150px] bg-red">
                        <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="" className='h-full w-full'/>
                    </div>
                    <div className="font-Raleway text-black text-lg text-center mt-7 font-normal uppercase tracking-[2.5px]">{props.title}</div>
                    <div className="font-Raleway text-[#5E5E5E] text-xs text-left mt-3 font-light px-3">
                        <b className='font-bold'>Date:</b> {props.date} <br />
                        <b className='font-bold'>Time:</b> {props.time} <br />
                        <b className='font-bold'>Location:</b> {props.location} <br />
                        <b className='font-bold'>Customer:</b> {props.customer} <br />
                        <b className='font-bold'>Phone:</b> {props.phone} <br />
                        <b className='font-bold'>Delivery Status:</b> {props.deliveryStatus} <br />
                        <b className='font-bold'>Payment Status:</b> {props.paymentStatus} <br />
                        <b className='font-bold'>Payment Method:</b> {props.paymentMethod} <br />
                        <b className='font-bold'>Total:</b> {props.total} <br />

                    </div>
                    <div className="absolute bottom-0 flex flex-row justify-center items-center mt-3 w-full h-12 font-Raleway text-xs font-extrabold text-[#f8f8ff] opacity-70 hover:opacity-100 transition-all" style={{ background: props.bg }}>DELIVER NOW</div>
                    {/* <StarRating/> */}
                </div>
        </>
    )
}
