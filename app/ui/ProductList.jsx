import { ProductArr2 } from "../lib/data";
import Image from "next/image";
import StarRating from "../ui/StarRatting";
import CartBtn from "../ui/CartBtn";
import Link from "next/link";

const ProductList = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full  gap-4 md:gap-8  lg:gap-4 ">
                {ProductArr2.map((shoe, index)=>(
                    <Link href={`allproducts/${shoe.id}`}>
                    <div key={index} className="pb-6 md:mb-8 lg:pb-0">
                        <div>
                            <Image src={shoe.href} height={260} width={296} alt="shoe" className="w-full lg:w-[296px"/>
                        </div>
                        <div className=" max-w-full lg:max-w-[296px]">
                            <div className="flex justify-between pt-3">
                                <p className="font-medium"> {shoe.title}</p>
                                <p className="flex items-center text-[#101928] "><span className="text-[11px]">₦</span> <span className="text-lg font-semibold">{shoe.price}</span><span className="text-[11px]">.99</span></p>
                            </div>
                            <p className="text-sm text-[#1D2739]">{shoe.desc}</p>
                            <div className="flex gap-8 pt-1">
                            <StarRating/>
                            <span className="text-sm text-[#1D2739]">(91)</span>
                            </div>
                            <div>
                            <CartBtn/>
                            </div>
                            
                            
                        </div>
                    </div>
                    </Link>
                ))}

            </div>
    
    </>
  )
}

export default ProductList