import React from 'react'
export default function TestimonialCard() {
  return (
    <>
       <div className="flex flex-col lg:flex-row justify-evenly items-center w-full">
            <div className=" bg-red-600 shadow-lg mt-12 lg:mt-0">
                <img src="https://www.dropbox.com/s/w9k27an1dsyry59/final_repaybly_front_page.jpg?dl=1" className='h-[300px] w-[300px]'/>
            </div>
            <div className="h-full w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-12">
                <div className="font-Raleway text-black text-center lg:text-left text-lg mt-16 lg:mt-0 font-semibold uppercase tracking-[2.5px]">Mission</div> 
                <div className="font-Raleway text-black text-center lg:text-left text-xs mt-1 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et porta turpis. Sed sem risus, dapibus id aliquet vitae, dapibus eget odio. Proin facilisis velit ex, et efficitur risus ullamcorper quis. Nunc et hendrerit lacus. Integer et pharetra erat. Nulla vehicula molestie vehicula. Curabitur vitae sem mi. Nam sagittis, risus at posuere imperdiet, mi leo tempor ex, ac fermentum nisl mauris id lacus. Morbi at tellus lectus. Maecenas interdum libero non mauris tempor, vitae cursus risus varius. Ut blandit id sapien at fringilla. Integer aliquam ante ac justo sodales, vel dignissim erat pellentesque. Aliquam non quam orci. </div> 
                <div className="font-Raleway text-black text-center lg:text-left text-lg mt-7 font-semibold uppercase tracking-[2.5px]">Vission</div> 
                <div className="font-Raleway text-black text-center lg:text-left text-xs mt-1 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et porta turpis. Sed sem risus, dapibus id aliquet vitae, dapibus eget odio. Proin facilisis velit ex, et efficitur risus ullamcorper quis. Nunc et hendrerit lacus. Integer et pharetra erat. Nulla vehicula molestie vehicula. Curabitur vitae sem mi. Nam sagittis, risus at posuere imperdiet, mi leo tempor ex, ac fermentum nisl mauris id lacus. Morbi at tellus lectus. Maecenas interdum libero non mauris tempor, vitae cursus risus varius. Ut blandit id sapien at fringilla. Integer aliquam ante ac justo sodales, vel dignissim erat pellentesque. Aliquam non quam orci. </div> 
            </div>
       </div>
    </>
  )
}
