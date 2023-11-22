import Image from 'next/image'
import Hero from './ui/Hero'
import Featured from './ui/Featured'
import Products from './ui/Products'
import { FiPlus } from "react-icons/fi";
import ShopBtn from './ui/ShopBtn';


export default function Home() {
  const linearGradient = {
    background: 'linear-gradient(144.09deg, #9C0215 16.87%, #CF0F22 79%)',
  };
  return (
    <>
    <div>
      <Hero/>
      <Featured/>
      <div className='px-4 md:px-10 xl:px-[100px] mt-8'>
        <div className="flex justify-between items-center py-2"> 
              <p className="font-semibold  text-[20px] md:text-[28px] text-[#101928]">Popular Products</p>
              <p className="flex text-[#EB5017] text-sm font-semibold gap-1 md:gap-2"><span>View all</span> <FiPlus className="text-xl"/></p>
          </div>
          
          <Products/>
      </div>
      <div className='px-8 xl:px-[100px] mt-8'>
        <div className="flex justify-between items-center py-2"> 
              <p className="font-semibold  text-[20px] md:text-[28px] text-[#101928]">Latest Products</p>
              <p className="flex text-[#EB5017] text-sm font-semibold gap-1 md:gap-2"><span>View all</span> <FiPlus className="text-xl"/></p>
          </div>
          
          <Products/>
      </div>

      <div style={linearGradient} className='mt-8 mx-4 md:mx-10 xl:mx-[100px]  h-[280px] md:h-[245px] px-4 md:px-8' >
        <div className='flex justify-between items-center w-full h-full'>
          <div className='w-full  md:w-[80%] lg:w-1/2 flex flex-col  justify-center md:flex-row md:justify-between md:items-center h-full'>
            <p className='text-4xl font-semibold leading-[43px] text-[#FFFFFF] w-full md:w-[60%] xl:max-w-[50%]'>Free delivery on all Lagos Orders</p>
            <div className='pt-4 md-pt-0'>
            <ShopBtn/>
            </div>
            
          </div>
          <div className='w-1/2 hidden  lg:flex justify-center h-full relative '>
            <Image src={'/grid-3.svg'} width={200} height={245} alt='' className='h-[245px]  w-[400px] absolute bottom-[-24px]'/>
          </div>
        </div>       
      </div>
    </div>
    
  
    </>
  )
}
