'use client'
import { ProductArr2 } from "@/app/lib/data"
import StarRating from "@/app/ui/StarRatting"
import { useState } from "react"
import Image from "next/image"
import CategoriesNav from "@/app/ui/CategoriesNav"
import { FaPlus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";
import Link from "next/link"
import Products from "@/app/ui/Products"
import { FiPlus } from "react-icons/fi";




const Page = ({params}) => {
    const [selectedSize, setSelectedSize] = useState('37');

    const productid = params.productId
    const sizes = ["37", "38", "39", "41", "42"," 43"," 44 "]

    const handleSizeClick = (size) => {
        setSelectedSize(size);
      };

  return (
    <>
        <div className="flex flex-col px-4 md:px-10 xl:px-[100px] mt-10">
            <CategoriesNav/>
                <div className="flex justify-between mt-2  md:mt-12">
                    <div>
                        {ProductArr2.filter((product) => product.id == productid)
                        .map((info, index)=>(
                            <div key={index} className="grid grid-cols-1 md:grid-cols-2">
                                <div className="pe-0 lg:pe-6 max-w-[548px]  relative max-h-[620px]">
                                    <Image src={info.href} height={500} width={500} alt="shoe"  className="h-[505px] w-[548px] rounded-[10px]"/>
                                    <div className=" hidden lg:grid grid-cols-4 w-full gap-4 absolute bottom-0 pe-6">
                                        <Image src={info.href} height={60} width={60} alt="shoe" className="h-[120px] w-full rounded-[10px]"/>
                                        <Image src={info.href} height={60} width={60} alt="shoe" className="h-[120px] w-full rounded-[10px]"/>
                                        <Image src={info.href} height={60} width={60} alt="shoe" className="h-[120px] w-full rounded-[10px]"/>
                                        <Image src={info.href} height={60} width={60} alt="shoe" className="h-[120px] w-full rounded-[10px]"/>
                                    </div>
                                </div>
                                <div className="mt-[-30px] md:mt-0">
                                    <h2 className="text-[#101928] font-semibold text-[32px]">Nike Blazer Low 77 Vintage</h2>
                                    <p className="text-[#667185] text-sm py-2">Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks.</p>
                                    <span className="flex items-center gap-4"><StarRating/> <span className="text-sm font-medium text-[#344054]">(121)</span></span>
                                    <p className="text-2xl text-[#101928] font-bold tracking-tight"><span>₦</span> <span>19,000.0</span></p>
                                    <p className="text-[#667185] text-sm pb-4">Suggested payments with 6 months special financing</p>
                                    <div >
                                        <div className="py-4 border-y-2 border-[#F0F2F5] ">
                                        <p className="text-[#101928] font-semibold">Choose a Color</p>
                                        <div className="flex gap-4 items-center py-2">
                                            <div className="border border-[#CC400C] rounded-full p-2 flex justify-center items-center">
                                            <div className="w-10 h-10 bg-[#FFFFFF] rounded-full border border-[#E4E7EC]"></div>
                                            </div>
                                            <div className="w-10 h-10 bg-[#B00074] rounded-full"></div>
                                            <div className="w-10 h-10 bg-[#475367] rounded-full"></div>
                                            <div className="w-10 h-10 bg-[#FBE2B7] rounded-full"></div>
                                            <div className="w-10 h-10 bg-[#FBE2B7] rounded-full"></div>
                                        </div>
                                        </div>
                                        <div className="py-4 border-b-2 border-[#F0F2F5]">
                                            <div className="flex justify-between pt-1">
                                                <p className="text-[#101928] font-semibold">Select Size</p>
                                                <p>Size Guide</p>
                                            </div>
                                            <div className="text-[#475367] flex justify-between py-3">
                                                {sizes.map((size)=>(
                                                <button key={size} onClick={() => handleSizeClick(size)} className={`bg-[#F0F2F5] h-[44px] w-[58px] font-semibold text-sm rounded-full ${
                                                    selectedSize === size
                                                      ? 'border border-[#F56630] text-[#F56630] bg-[#ffece5]'
                                                      : 'bg-[#F0F2F5] text-[#475367]'
                                                  }`}>{size}</button>
                                               ))}
                                                
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <p className="text-[#101928] font-semibold pb-4">Quantity</p>
                                            <div className="flex gap-4 items-center justify-center md:justify-start ">
                                                <button className=" font-semibold flex justify-evenly items-center w-[204px] h-[64px] px-2 bg-[#F9FAFB] border border-[#F0F2F5] rounded-full">
                                                    <AiOutlineMinus className=""/>
                                                   
                                                    <span className="text-[#F56630] text-lg">1</span>
                                                    <FaPlus className="text-[#F56630] text-lg"/>
                                                  

                                                </button>  
                                                <div className="text-sm text-[#667185] hidden md:block ">
                                                    <p>Only <span className="text-[#F56630]">12 Items</span> Left!</p>
                                                    <p>Dont miss it</p>     
                                                </div>                                               
                                           </div>

                                                 <div className=" flex flex-col md:flex-row items-center md:items-start gap-6 py-6">
                                                    <Link href="/cart" className="text-[#FFFFFF] bg-[#EB5017] w-[194px] py-4 px-6 flex justify-center items-center font-semibold rounded-full">Buy Now</Link>
                                                    <Link href="" className=" text-[#F56630] border-[#EB5017] w-[194px] border-[1.5px] py-4 px-6 flex justify-center items-center font-semibold rounded-full">Add to Cart</Link>
                                                </div>

                                                <div className="w-full flex gap-6 rounded-[10px] p-[28px] mt-2 border">
                                                    <Image src={'/delivery-icon.svg'} height={26} width={26} alt="Delivery Icon"/>
                                                    <div>
                                                        <p className="text-[#101928] font-semibold">Free Delivery</p>
                                                        <p className="text-[#667185] underline">Enter your Postal Code for Delivery Availability</p>
                                                    </div>

                                                </div>
                                            
                                        </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                                </div>                        
                            ))}
                      </div>
             
                </div>
                <div className=' mt-12 mb-20'>
            <div className="flex justify-between items-center py-2"> 
                <p className="font-semibold  text-[20px] md:text-[28px] text-[#101928]">Popular Products</p>
                <p className="flex text-[#EB5017] text-sm font-semibold gap-1 md:gap-2"><Link href={'/allproducts'}>View all</Link> <FiPlus className="text-xl"/></p>
            </div>
            
            <Products/>
            </div>
        </div>

    </>
  )
}

export default Page