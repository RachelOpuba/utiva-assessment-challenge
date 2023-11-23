'use client'
import Sidebar from "../ui/Sidebar"
import { IoChevronDown } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

import ProductList from "../ui/ProductList";



const page = () => {

    return (
    <div>
      <div className="block lg:flex w-full px-4 md:px-10 xl:px-[100px] gap-10 xl:gap-20">
        <div className="hidden md:block ">
          <Sidebar/>
        </div>
      

      <div className="w-full mt-16 md:mt-[100px] grow">
        <div className="w-full flex justify-between items-center border-y border-[#F0F2F5] py-2">
          <div className="hidden md:flex gap-6 ">
            <p >Filters:</p>
            <div className="text-[#F56630] flex  items-center gap-2 text-sm font-semibold">
              <p>Brands (1)</p>
              <IoChevronDown className="text-lg"/>
            </div>
            <div className="text-[#101928] flex  items-center gap-2 text-sm font-semibold">
              <p>Color</p>
              <IoChevronDown className="text-lg"/>
            </div>
            <div className="text-[#101928] flex  items-center gap-2 text-sm font-semibold">
              <p>Price</p>
              <IoChevronDown className="text-lg"/>
            </div>

          </div>
          <div className="flex gap-2">
            <span>Sort by:</span>
            <div className="text-[#F56630] flex  items-center gap-2 text-sm font-semibold">
              <p>Most popular</p>
              <IoChevronDown className="text-lg"/>
            </div>
          </div>

        </div>

        <div className="flex w-full justify-between items-center pt-8 pb-12">
          <div className="flex gap-2">
            <button className="flex justify-center rounded-lg  items-center text-[#475367] font-semibold border py-[6px] px-2 bg-[#FBF1F1] border-[#CC400C]">
              <span>Nike</span>
               <IoIosClose className="text-2xl"/>
              </button>
            <button className="flex justify-center rounded-lg  items-center text-[#475367] font-semibold border py-[6px] px-2 bg-[#FBF1F1] border-[#CC400C]">
              <span>Women</span>
               <IoIosClose className="text-2xl"/>
              </button>
            <button className="flex justify-center rounded-lg  items-center text-[#475367] font-semibold border py-[6px] px-2 bg-[#FBF1F1] border-[#CC400C]">
              <span>Footware</span>
               <IoIosClose className="text-2xl"/>
              </button>
          </div>
          <p className="text-[#101928] hidden md:block">Showing 1- 15 of 200 results</p>
        </div>

        <div>
          <ProductList/>
          
        </div>

        <div className="font-medium text-[#828282] flex w-full justify-center items-center mt-10 mb-[120px]">
          <button className="border rounded-xl p-[10px] ">Load More</button>
        </div>
  
      </div>
      
      </div>
        
    </div>
  )
}

export default page