import React from 'react'

export default function Heading(props) {
  return (
    <>
        <div className="font-Raleway  mb-5 md:mb-7 lg:mb-12 text-center text-maroon text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest">
            {props.title}
            <div className="font-Raleway mt-2 text-xs font-medium text-greenDark relative after:w-[60%] after:absolute after:top-[-2.5px] after:left-1/2 after:translate-x-[-50%] after:h-[0.2px] after:bg-green ">
            {/* <div className="absolute top-0 left-0 w-full"></div> */}
            {props.subtitle}
            </div>
        </div>
    </>
  )
}
