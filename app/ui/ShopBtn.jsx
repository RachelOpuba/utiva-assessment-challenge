import { IoChevronForwardSharp } from "react-icons/io5";


const ShopBtn = () => {
  return (
    <>
    <div>
        <button className="bg-[#EB5017] text-white  flex items-center justify-center p-3 md:p-4 rounded-lg gap-2">
            <span>Shop now</span> 
            <IoChevronForwardSharp className="text-xl"/>
        </button>
    </div>
    </>
  )
}

export default ShopBtn