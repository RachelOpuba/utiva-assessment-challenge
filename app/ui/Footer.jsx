import Image from "next/image"
import Link from "next/link"
import { CompanyArr } from "../lib/data"

const Footer = () => {
  return (
    <>
    <footer className=" bg-[#F9F9F9] flex flex-col py-[80px] lg:py-[100px]">
        <div className="flex flex-col  lg:flex-row justify-between  mx-8 md:mx-20 xl:mx-[100px] pb-12 md:pb-[80px] lg:pe-10 xl:pe-[200px] border-b border-[#BDBDBD] ">
            <div className="flex flex-col gap-6 ">
                <div className="flex gap-1 items-center">
                    <Image src={'/logo.svg'} height={40} width={40} alt="Logo"/>
                    <p className="text-[#2F234F] text-lg font-bold">Logoipsum</p>
                </div>
                <p className="text-[#344054] text-sm ">Be the first to get discounts and sales update</p>
                <form  className="flex flex-col md:flex-row gap-2 mb-10 lg:mb-0">
                    <input type="text" placeholder="Email address" className="h-[56px] md:w-[238px] placeholder:text-[#98A2B3] placeholder:text-sm ps-4 border border-[#BDBDBD] rounded-lg" />
                    <button className="bg-[#EB5017] text-white font-semibold px-6 py-4 rounded-lg">Subscribe</button>
                </form>

            </div>
            <div className="flex flex-col md:flex-row justify-between md:gap-20 xl:gap-[150px] ">
                <div className="flex flex-col justify-between">
                    <p  className="text-[#333333] font-bold">Company</p>
                    <div>{CompanyArr.map((link, index)=>(
                        <div key={index} className="flex flex-col gap-[15px]">
                            <Link href={link.href}  className="text[#4F4F4F] mt-2">{link.title}</Link>
                        </div>
                    ))}</div>
                </div>
                <div className="flex flex-col justify-between mt-6 md:mt-0">
                    <p  className="text-[#333333] font-bold">Contact</p>
                    <div className="py-3 md:py-0">
                        <p>Address:</p>
                        <p>7, Ogunlesi street,  <br />yaba, Lagos</p>
                    </div>
                    <div>
                        <p>Email:</p>
                        <p>mystore@example.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full text-center pt-[60px]">
            <p className="text-[#828282]">Powered by: <span className="text-black text-xl font-medium">Vendu.store</span></p>
        </div>

    </footer>
    </>
  )
}

export default Footer