import Image from "next/image"

const OrderSummary = () => {
  return (
    <>
        <div className="w-full max-w-[760px] mt-10 py-8 px-2 md:px-8  rounded-[10px] border border-[#E4E7EC">
                <div>
                    <div>
                    <div className='flex justify-between items-center  mb-6'>
                         <p className="flex font-semibold gap-4 items-center"><span className="text-[#101928]  text-2xl">Order Summary</span> <button className="bg-[#F56630] text-[#FFFFFF] text-lg h-9 w-[38px] rounded-full">2</button></p>
                    
                    </div>
                        <div className="flex pb-6 border-b flex-col md:flex-row my-8">
                            <div className=" mb-3 mt-4 md:mt-0 md:mb-0">
                                <Image src={'/shoe-1.svg'} height={120} width={120} alt="Shoe" className="h-[120px] w-[120px]"/>
                            </div>
                            <div className="w-full flex flex-col justify-center ps-0  md:ps-4">
                                <div className="flex justify-between">
                                    <p className="text-[#101928] font-medium ">Nike Blazer Low 77 Vintage X 1</p>
                                    <p className="flex items-center text-[#101928] "><span className="text-[11px]">₦</span> <span className="text-lg font-semibold">15,000</span></p>
                                </div>
                                <p className="text-sm text-[#475367] ">Color: <span>Black</span></p>
                                <p className="text-sm text-[#475367] mb-4">Size: <span>41</span></p>
                                
                            </div>
                           
                        </div>

                        <div className="flex  flex-col md:flex-row ">
                            <div className=" mb-3 mt-4 md:mt-0 md:mb-0">
                                <Image src={'/shoe-1.svg'} height={120} width={120} alt="Shoe" className="h-[120px] w-[120px]"/>
                            </div>
                            <div className="w-full flex flex-col justify-center ps-0  md:ps-4">
                                <div className="flex justify-between">
                                    <p className="text-[#101928] font-medium ">Nike Blazer Low 77 Vintage X 1</p>
                                    <p className="flex items-center text-[#101928] "><span className="text-[11px]">₦</span> <span className="text-lg font-semibold">25,000</span></p>
                                </div>
                                <p className="text-sm text-[#475367] ">Color: <span>Black</span></p>
                                <p className="text-sm text-[#475367] mb-4">Size: <span>41</span></p>
                                
                            </div>
                           
                        </div>
                    </div>

                    


                    
                </div>

            </div>
    </>
  )
}

export default OrderSummary