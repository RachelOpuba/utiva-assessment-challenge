import Image from "next/image"
import ShopBtn from "./ShopBtn"


const Hero = () => {
  return (
    <>
    <div className="h-[80vh] max-h-[600px] relative ">
        <Image src={'/grid-2.svg'}  alt="Kids Swimming" height={400}  width={400} className="absolute z-[-1] w-full h-full object-cover top-0"/>
        <div className="ps-8 xl:ps-[112px] flex flex-col gap-12 justify-center h-full">
           <h1 className="text-white font-medium  text-[44px]  leading-[48px] md:leading-[63px]  md:text-6xl  max-w-[90%] md:max-w-[70%]   lg:max-w-[50%] xl:max-w-[40%]">Up to <span className="font-bold">60% off </span>on all items till September 11</h1>
           <ShopBtn/>
        </div>
    </div>
    </>
  )
}

export default Hero