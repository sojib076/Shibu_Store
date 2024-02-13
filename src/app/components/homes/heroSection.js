import React from 'react';

    import womenimage from '../../assets/women-banner.png';
import Image from 'next/image';
    
const HeroSection = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center bg-[#F4F6F5] h-auto lg:h-[377px] w-full lg:w-[90%] mx-auto lg:border border-black shadow-sm shadow-black rounded-3xl lg:mr-[2em] lg:my-[5%]">
        <div className="w-full lg:w-1/2 p-8 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold text-gray-800 lg:text-[45.6px] lg:leading-[57px]">LET’S</h1>
          <h1 className="text-4xl font-extrabold text-gray-800 lg:text-[45.6px] lg:leading-[57px]">EXPLORE</h1>
          <h1 className="text-4xl font-extrabold text-gray-800 lg:text-[45.6px] lg:leading-[57px] border
           border-black bg-[#EBD96B] lg:w-1/2 rotate-1">UNIQUE</h1>
          <h1 className="text-4xl font-extrabold text-gray-800 lg:text-[45.6px] lg:leading-[57px]">CLOTHES.</h1>
          <p className="text-lg text-gray-600">Live for Influential and Innovative fashion!</p>
          <button className="mt-2 bg-black text-white font-bold py-2 px-4 rounded transition-transform duration-300 ease-in-out transform hover:-translate-y-1">Learn More</button>
        </div>
        <div className=" w-[90%] lg:w-[422px] lg:h-[377px]">
          <Image src={womenimage} alt="Hero Image" 
          className="h-full w-full object-cover"

          
          />
        </div>
      </div>
      
    );
};

export default HeroSection;
