import React from 'react'

export default function CategoryCard(props) {
    return (
        <>
                <div className="m-5 flex flex-col justify-center items-center h-[300px] w-[240px] shadow-[0_15px_25px_rgba(0,0,0,0.075)] rounded-lg transition-all duration-200 cursor-pointer hover:scale-110" style={{ background: props.bg }}>
                    <div className="grid w-[200px] h-[100px] rounded-full">
                        <img src={props.img} alt="" className='h-full w-full'/>
                    </div>
                    <div className="font-Raleway text-white text-lg text-center mt-12 font-semibold tracking-wide">{props.category}</div>
                    <div className="font-Raleway text-white text-xs text-center -mt-1 font-thin">{props.items} items</div>
                </div>
        </>
    )
}
 