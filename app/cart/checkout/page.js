import Link from "next/link"
import Image from "next/image"
import OrderSummary from "@/app/ui/OrderSummary"
import DeliveryInfo from "@/app/ui/DeliveryInfo"
import Payment from "@/app/ui/Payment"



const Page = () => {
  return (
    <div>
        <div className="px-4 md:px-10 xl:px-[100px] mt-10 flex flex-col lg:flex-row">
            <div className="flex-1">
            <div className="flex text-sm ">           
                <div className="flex">
                    <Link href={'/'} className="px-1 text-[#EB5017]">Home</Link>
                    <span>/</span>
                </div>
                <div className="flex">
                    <Link href={'/allproducts'} className="px-1 text-[#EB5017]">Cart</Link>
                    <span>/</span>
                </div>
                <div className="flex text-[#667185] ">
                    <Link href={'/allproducts'} className="px-1 font-medium">Checkout</Link>                   
                </div>
            </div>
            <OrderSummary/>
            <DeliveryInfo/>
            </div>
            <Payment/>
        </div>

    </div>
  )
}

export default Page