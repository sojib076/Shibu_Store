
import Image from 'next/image';
import hm from '../../assets/hm.png';
 
import obey from '../../assets/obey.png';
const promation = () => {
   return (
       <div className='lg:my-[5%]'>
           <h1 className='text-4xl font-bold text-center pt-4'>PROMOTION</h1>
           <div className='h-[80px] bg-yellow-500  grid grid-cols-4  p-8 '> 
               <Image src={hm} alt="hm"  />
               <Image src={obey} alt="obey" />
               <Image src={obey} alt="obey" />
               <Image src={obey} alt="obey" />
           </div>
       </div>
   );
};

export default promation;