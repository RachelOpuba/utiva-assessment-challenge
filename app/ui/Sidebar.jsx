
import Link from "next/link"
import Image from "next/image"
import { FiPlus } from "react-icons/fi";
import CategoriesNav from "./CategoriesNav";


const Sidebar = () => {
  return (
    <>
    <div className=" mt-10 w-[245px]">
        <div className="hidden lg:flex flex-col  gap-10">
            <CategoriesNav/>

            <div className="w-[245px]">
                <p className="text-[#101928] font-medium text-[20px] pb-6">Lifetyle</p>

                <div className="  h-[36px] rounded-[6px] flex gap-1 border border-[#D0D5DD] mb-4 ps-2">
                    <Image src={'/search.svg'}  height={16} width={16} alt="Search Icon"/>
                    <input type="text" placeholder="Search items..." className=" py-2 px-3 w-[245px] h-full text-sm outline-none bg-white placeholder:text-[#98A2B3]"/>
                </div>

                <div>
                    <div className="flex justify-between border-b border-[#F0F2F5] py-4">
                        <p className="text-sm text-[#101928]">Clothing</p>
                        <FiPlus className="text-[#98A2B3] text-lg"/>
                    </div>
                    <div className="flex justify-between border-b border-[#F0F2F5] py-4">
                        <p className="text-sm text-[#101928]">Bags</p>
                        <FiPlus className="text-[#98A2B3] text-lg"/>
                    </div>
                    <div className="flex justify-between border-b border-[#F0F2F5] py-4">
                        <p className="text-sm text-[#101928]">Assessories</p>
                        <FiPlus className="text-[#98A2B3] text-lg"/>
                    </div>
                    <div className="flex justify-between  border-b border-[#F0F2F5] py-4">
                        <p className="text-sm text-[#101928]">Headwears</p>
                        <FiPlus className="text-[#98A2B3] text-lg"/>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Sidebar