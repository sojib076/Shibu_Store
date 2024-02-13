import React from 'react';
import womenyellow from '../../assets/women-yellow.png'
import Image from 'next/image';
const NewProducts = () => {
    return (
        <div className='lg:ml-[5%] bg-[#fffafa]'>
            <h1 className='text-left lg:text-[30.8px] leading-[33px] font-extrabold mt-5 '>
                NEW ARRIVALS
            </h1>
            <div className='grid lg:grid-cols-3 grid-cols-2  w-[100%]  lg:w-full p-5  '>
                <div className="rounded-lg overflow-hidden bg-white shadow-lg lg:w-[70%] w-[90%] lg:h-[100%] h-[100%]">
                    {/* Image section */}
                    <div className="w-full">
                        <Image
                            src={womenyellow}
                            alt="Shirt"
                            className="w-full  object-cover rounded-t-lg"
                        />
                    </div>
                    {/* Content section */}
                    <div className="p-4 flex justify-between items-center">
                        {/* Shirt name */}
                        <p className="text-sm font-medium mr-auto">Shirt Name</p>
                        {/* Click me button */}
                        <button className="text-blue-500 hover:text-blue-700 mr-2">Click me</button>
                        {/* Arrow icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
                <div className=" rounded-lg overflow-hidden bg-white shadow-lg lg:w-[70%] w-[90%] lg:h-[100%] h-[100%]">
                    {/* Image section */}
                    <div className="w-full">
                        <Image
                            src={womenyellow}
                            alt="Shirt"
                            className="w-full  object-cover rounded-t-lg"
                        />
                    </div>
                    {/* Content section */}
                    <div className="p-4 flex justify-between items-center">
                        {/* Shirt name */}
                        <p className="text-sm font-medium mr-auto">Shirt Name </p>
                        {/* Click me button */}
                       
                        {/* Arrow icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
                <div className=" rounded-lg overflow-hidden bg-white shadow-lg lg:w-[70%] w-[90%] lg:h-[100%] h-[100%]">
                    {/* Image section */}
                    <div className="w-full">
                        <Image
                            src={womenyellow}
                            alt="Shirt"
                            className="w-full  object-cover rounded-t-lg"
                        />
                    </div>
                    {/* Content section */}
                    <div className="p-4 flex justify-between items-center">
                        {/* Shirt name */}
                        <p className="text-sm font-medium mr-auto">Shirt Name</p>
                        {/* Click me button */}
                        <button className="text-blue-500 hover:text-blue-700 ">Click me</button>
                        {/* Arrow icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
             
           
            </div>
        </div>
    );
};

export default NewProducts;