'use client';
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import {motion, useCycle, AnimatePresence} from "framer-motion"


const links = [
    { name: 'All Categories', href: '/'},  
    { name: 'Cart', href: '/' },
    { name: 'Profile', href: '/'},
    
  ];





export default function  Navbar () {

    const [mobileNav, toggleMobileNav] = useCycle(false, true)
    const [showMenu, setShowMenu] = useState(false)

    const mobileMenu = <>
        <nav className=" fixed inset-0 z-[1] left-0 w-full bg-slate-900  text-white flex md:hidden flex-col gap-7 items-center pt-[20%] transition">
        <AnimatePresence>
        <motion.div
        variants={{
          open:{
            x: "0%",
          }, 
          closed:{
            x: "-100%",
          },
        }}
        initial="closed"
        animate="open"
        exit="closed"
        >
        {links.map((link) =>( 
          <Link
            key={link.name}
            href={link.href}
                      >
           
            <p className="uppercase text-md font-bold text-white my-3 py-4 px-4 border-b border-slate-800 hover:border-fuchsia-600 hover:text-fuchsia-600 transition text-center" onClick={()=> toggleMobileNav()}>{link.name}</p>
          </Link>
        )
      )}
        </motion.div> 
        </AnimatePresence>    
        </nav> 
    </>

  return (
    <>
        <header className="h-[112px] px-8 lg:px-[40px] xl:px-[112px] w-screen max-w-[1440px] flex justify-between items-center border">
            <div>
                <Image src={'/logo.svg'} height={40} width={40} alt="Logo"/>
            </div>
            <div className="hidden md:flex  gap-4 xl:gap-8 items-center h-full ">
                <div className="bg-[#F0F2F5] w-[80%] md:w-[300px] xl:w-[375px] h-[36px] py-2 px-3 rounded-[6px] flex gap-1">
                    <Image src={'/search.svg'}  height={16} width={16} alt="Search Icon"/>
                    <input type="text" placeholder="Search here..." className="w-full h-full bg-[#F0F2F5] text-sm outline-none placeholder:text-[#98A2B3]"/>
                </div>
                <div className=" hidden md:flex flex-col items-center justify-between h-full py-6">
                    <Image src={'/heart.svg'} height={18} width={18} alt="Heart"/>
                    <div className="flex gap-2 justify-center items-center">
                        <Link href="/" className="font-semibold text-[#101928]">All Categories</Link>
                        <Image src={'/red-arrow-down.svg'} height={15} width={15} alt="Arrow Doen"/>
                    </div>

                </div>
                <div className="hidden md:flex flex-col items-center justify-between h-full py-6">
                <Image src={'/cart.svg'} height={18} width={18} alt="Cart"/>
                    <div className="flex gap-2 justify-center items-center">
                        <Link href="/" className="font-semibold text-[#101928]">Cart</Link>
                        
                    </div>
                </div>
                <div className="hidden md:flex flex-col items-center justify-between h-full py-6">
                <Image src={'/user.svg'} height={18} width={18} alt="User"/>
                    <div className="flex gap-2 justify-center items-center">
                        <Link href="/" className="font-semibold text-[#101928]">Profile</Link>
                        
                    </div>
                </div>
            </div>
            <div className="bg-[#F0F2F5] w-[50%] md:w-[300px] xl:w-[375px] h-[36px] py-2 px-3 rounded-[6px] flex md:hidden  gap-1">
                    <Image src={'/search.svg'} height={16} width={16} alt="Search Icon"/>
                    <input type="text" placeholder="Search here..." className="w-full h-full bg-[#F0F2F5] text-sm outline-none placeholder:text-[#98A2B3]"/>
                </div>
                 <div className="block md:hidden ms-8 z-[50]">
             
              {mobileNav ?  <AiOutlineClose className="w-10 h-10 text-white" onClick={()=> toggleMobileNav()}/>: <RxHamburgerMenu className="w-10 h-10 " onClick={()=>toggleMobileNav()}/>  }
              </div>
          
              {mobileNav && mobileMenu} 
            
          
                
        </header>
    </>
  )
}

