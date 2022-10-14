import React from 'react'
import Review from './Review'

export default function Detail() {
    return (
        <>
            <div className="flex flex-row justify-start items-start w-full p-20">
                <div className="flex flex-col justify-center items-start md:mr-10 md:w-[50%]">
                    <img className='w-[300px] h-[300px] md:h-[350px] md:w-[450px] lg:w-[500px] rounded-md shadow-md' src="https://picsum.photos/id/237/200/300" alt="" />
                    <div className="flex flex-row justify-start items-center w-full mt-5">
                        <img className='w-[100px] h-[100px] rounded-md shadow-md transition border-[3px] border-transparent cursor-pointer hover:border-maroon' src="https://picsum.photos/id/237/200/300" alt="" />
                        <img className='w-[100px] h-[100px] rounded-md shadow-md transition border-[3px] border-transparent cursor-pointer hover:border-maroon' src="https://picsum.photos/id/237/200/300" alt="" />
                        <img className='w-[100px] h-[100px] rounded-md shadow-md transition border-[3px] border-transparent cursor-pointer hover:border-maroon' src="https://picsum.photos/id/237/200/300" alt="" />
                        <img className='w-[100px] h-[100px] rounded-md shadow-md transition border-[3px] border-transparent cursor-pointer hover:border-maroon' src="https://picsum.photos/id/237/200/300" alt="" />
                        <img className='w-[100px] h-[100px] rounded-md shadow-md transition border-[3px] border-transparent cursor-pointer hover:border-maroon' src="https://picsum.photos/id/237/200/300" alt="" />
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start w-[45%]">
                    <div className="font-Raleway text-center text-maroon text-sm font-semibold uppercase tracking-widest">
                        Women Fashion
                    </div>
                    <div className="font-Raleway text-[#111] text-4xl font-bold">
                        Lorem ipsum dolor, sit amet consectetur, adipisicing elit.
                    </div>
                    <div className="flex flex-row items-center justify-start w-full mt-7">
                        <div className="w-[40%] h-[35px] flex flex-row justify-between px-5 items-center bg-[#eceaf0] rounded-md shadow-sm">
                            <p className='font-Raleway text-maroon transition hover:text-maroonDark text-5xl font-normal hover:font-semibold cursor-pointer'>+</p>
                            <p className='font-Raleway text-[#222] transition text-2xl font-semibold'>0</p>
                            <p className='font-Raleway text-maroon transition hover:text-maroonDark text-5xl font-normal hover:font-semibold cursor-pointer -mt-[5px]'>-</p>
                        </div>
                        <div className="w-[60%] h-[40px] grid place-items-center font-Raleway bg-maroon transition hover:bg-maroonDark text-white rounded-md shadow-sm ml-5 cursor-pointer font-semibold text-lg">Add to cart</div>
                    </div>
                    <div className="font-Raleway mt-5 text-[#333] text-md font-normal">
                        Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est. <br />
                        Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Vitae exercitationem porro saepe ea harum corrupti vero id laudantium enim, libero blanditiis expedita cupiditate a est. <br /> <br />
                    </div>
                    <div className="font-Raleway text-[#111] text-4xl font-bold">
                        Rs. 1,200
                    </div>
                    <div className="font-Raleway text-[#333] text-md font-normal">
                        <s>Rs 1,500</s>
                    </div>
                </div>
            </div>
            <section class="py-24 2xl:py-44 w-full overflow-hidden">
                <div class="container px-4">
                    <a class="inline-block text-xl font-heading font-medium underline font-Poppins text-maroon text-center w-full" href="#">1,218 reviews</a>
                    <Review/>
                    <Review/>
                    <Review/>
                </div>
            </section>
        </>
    )
}
