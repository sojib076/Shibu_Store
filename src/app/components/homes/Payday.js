
import Image from 'next/image';
import paydaywomen from '../../assets/paydaywoman.png';
const Payday = () => {
    return (
        <div>
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:items-center bg-[#F4D850] 
        w-full lg:w-[90%] lg:mx-auto lg:mr-[2em] lg:my-[5%] my-10 ">
               <div className="lg:w-[90%] lg:h-[80%]">
            <Image src={paydaywomen} alt="Hero Image" className="lg:h-[50%]lg:w-full w-[80%] " />
          </div>
          <div className="w-full lg:p-8 text-center lg:text-left p-5">
            <h1 className="text-4xl font-extrabold text-gray-800 lg:text-[45.6px] lg:leading-[57px]">LET’S</h1>
            <h1 className="text-4xl font-extrabold text-gray-800 lg:text-[45.6px] lg:leading-[57px]">EXPLORE</h1>
            <h1 className="text-4xl font-extrabold text-gray-800 lg:text-[45.6px] lg:leading-[57px] 
              bg-white lg:w-1/2 rotate-1 w-2/3 mx-auto lg:mx-0">UNIQUE</h1>
            <h1 className="text-4xl font-extrabold text-gray-800 lg:text-[45.6px] lg:leading-[57px]">CLOTHES.</h1>
            <p className="text-lg text-gray-600 mt-3">Live for Influential and Innovative fashion!</p>
            <button className="mt-2 bg-black text-white font-bold py-2 px-4 rounded transition-transform duration-300 ease-in-out transform hover:-translate-y-1">Learn More</button>
          </div>
       
        </div>
      </div>
      
    );
};

export default Payday;