import React from "react";
import Heading from "../Common components/Heading";
import TestimonialCard from "../Uncommon Components/TestimonialCard";
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Testimonial() {
    return (
        <>
            <div className='flex flex-col justify-center items-center py-20'>
                <Heading title="About Us" subtitle="Who we are" />
                <TestimonialCard/>
            </div>
        </>
    );
}
