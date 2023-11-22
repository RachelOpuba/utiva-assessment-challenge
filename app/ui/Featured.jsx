import { FiPlus } from "react-icons/fi";
import Image from "next/image";
import ShopBtn from "./ShopBtn";


const Featured = () => {
  return (
    <>
    <div className="px-4 md:px-10 xl:px-[100px]  pt-10">
        <div className="flex justify-between items-center py-2"> 
            <p className="font-semibold  text-[20px] md:text-[28px] text-[#101928]">Featured Collections</p>
            <p className="flex text-[#EB5017] text-sm font-semibold gap-1 md:gap-2"><span>View all</span> <FiPlus className="text-xl"/></p>
        </div>

        <div className="h-[900px]  md:h-[400px] xl:h-[532px] flex flex-col md:flex-row gap-8 border">
            <div className="w-full md:w-[60%] relative h-1/2 md:h-full rounded-[10px]">
            <Image src={'/grid-1.svg'} alt="Little girls" height={200}  width={200} className="absolute z-[-1] w-full h-full object-cover top-0 rounded-[10px]"/>
            
            <div className="flex flex-col justify-between p-4 lg:p-8 h-full">
                <div className="flex justify-between">
                    <button className="uppercase text-[12px] font-semibold self-start bg-transparent border border-[#F3A218] text-[#F3A218] rounded-full text-sm py-1 px-3 mb-4">Up to 89% off</button>
                    <Image src={'/unknown-2.svg'} height={30} width={30} alt="Arrow" className="text-[#FFFFFF] h-[20px] md:h-[30px] w-[20px] md:w-[30px]"/>
                </div>

                <div className="flex flex-col lg:flex-row justify-between">
                    <p className=" text-3xl xl:text-4xl font-semibold text-[#FFFFFF] max-w-full md:max-w-[80%] lg:max-w-[60%] mb-4 lg:mb-0">Kiddies Korean Summer Collection</p>
                    <ShopBtn/>
                </div>

            </div>
            </div>
            <div className="w-full md:w-[40%] flex flex-col gap-6  lg:gap-8 h-full">
                <div className="h-1/2 relative  rounded-[10px]">
                <Image src={'/grid-2.svg'}  alt="Kids Swimming" height={200}  width={200} className="absolute z-[-1] w-full h-full object-cover top-0 rounded-[10px]"/>
                <div className="flex flex-col justify-center p-6 text-[#FFFFFF] h-full gap-6 ">
                    <button className="uppercase text-[12px] font-semibold self-start bg-[#F56630] rounded-full text-sm py-1 px-3 ">Up to 89% off</button>
                    <p className=" text-2xl lg:text-[28px] font-semibold max-w-full  lg:max-w-[80%] xl:max-w-[60%] leading-8">Children Summer Play set</p>
                </div>
                

                </div>
                <div className="h-1/2 relative  rounded-[10px] ">
                <Image src={'/grid-3.svg'}  alt="Shoe" height={200}  width={200} className="absolute z-[-1] w-full h-full object-cover top-0 rounded-[10px]"/>
                    
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default Featured