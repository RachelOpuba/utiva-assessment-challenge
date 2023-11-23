import { AiOutlineClose } from "react-icons/ai";
import { CartArr } from "../lib/data";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";
import Link from "next/link";


const Page = () => {

  return (
    <>
        <div className='w-full flex justify-center  my-10 '>
            <div className='p-4 md:p-10 flex flex-col w-[90%] max-w-[590px]'>
                <div className='flex justify-between items-center  mb-6'>
                    <p className="flex font-semibold gap-4 items-center"><span className="text-[#101928]  text-[28px]">My Cart</span> <button className="bg-[#F56630] text-[#FFFFFF] text-lg h-9 w-[38px] rounded-full">3</button></p>
                    <AiOutlineClose className="text-[#475367] text-2xl"/>
                </div>
                <div>
                    {CartArr.map((list, index)=>(
                        <div key={index} className="flex flex-col md:flex-row my-8">
                            <div className="w-full md:w-[40%] mb-3 mt-4 md:mt-0 md:mb-0">
                                <Image src={list.href} height={200} width={200} alt="Shoe" className="h-[200px] w-[90%]"/>
                            </div>
                            <div className="w-full md:w-[60%] flex flex-col justify-center ps-0  md:ps-4">
                                <div className="flex justify-between">
                                    <p className="text-[#101928] font-medium max-w-[162px]">{list.title}</p>
                                    <p className="flex items-center text-[#101928] "><span className="text-[11px]">₦</span> <span className="text-lg font-semibold">{list.price}</span><span className="text-[11px]">.99</span></p>
                                </div>
                                <p className="text-sm text-[#475367] mt-4">Color: <span>{list.desc}</span></p>
                                <p className="text-sm text-[#475367] mb-4">Size: <span>{list.size}</span></p>
                                <div className="flex justify-between items-center">
                                    <button className=" font-semibold flex justify-evenly items-center w-[120px] h-[40px] px-2 bg-[#F9FAFB] border border-[#F0F2F5] rounded-full">
                                         <AiOutlineMinus className=""/>
                                                   
                                        <span className="text-[#F56630] text-lg">1</span>
                                        <FaPlus className="text-[#F56630] text-lg"/>
                                    </button> 
                                    <Image src={'/bin.svg'} height={16} width={16} alt="Waste bin"/>
                               </div>
                            </div>
                           
                        </div>
                    ))}
                </div>
                <div className="flex justify-between py-6 my-4 border-y-2  border-[#F0F2F5]">
                    <p className="text-[#667185]">Subtotal:</p>
                    <p className="flex items-center text-[#101928] "><span className="text-[11px]">₦</span> <span className="text-lg font-semibold">28,499</span><span className="text-[11px]">.97</span></p>
                </div>
                <Link href="/cart/checkout" className="text-[#FFFFFF] bg-[#EB5017] w-full py-4 px-6 my-4 flex justify-center items-center font-semibold rounded-full">Checkout</Link>


            </div>

        </div>
    </>
  )
}

export default Page