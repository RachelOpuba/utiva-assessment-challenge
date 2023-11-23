'use client'
import { useState } from "react";
import PaymentCard from "./PaymentCard";
import Link from "next/link";

const Payment = () => {
    const [selectedOption, setSelectedOption] = useState('debitCard');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
      };
    

      const paymentOptions = [
        { id: 'debitCard', label: 'Debit or Credit Card' },
        { id: 'payOnDelivery', label: 'Pay on Delivery' },
        { id: 'bankDelivery', label: 'Bank Delivery' },
      ];


  return (
    <>
        <div className=' w-full  max-w-[424px] md:max-w-full lg:max-w-[424px] py-8 px-2 md:px-8 border min-h-screen  rounded-[10px] mt-6 md:mt-14 mb-[61px]'>
            <div className='flex flex-col'>
                <p className='text-[#101928] text-2xl font-semibold'>Payment Information</p>

                {/* <h2 className="text-orange-500 mt-8">This section is in Progress ...</h2> */}
                <p className="text-[#101928] font-semibold pb-3 pt-[28px]">Apply Discount</p>
                <div className="flex flex-col md:flex-row gap-4 pb-6 border-b border-[#E4E7EC]">
                    <input type="text" placeholder="Enter Coupon Code" className="bg-[#F9FAFB] w-full md:w-[245px] py-4 pe-4 ps-5 rounded-full placeholder:text-[#98A2B3] placeholder:text-sm"/>
                    <button className="bg-[#EB5017] py-4 px-6 rounded-full text-white font-semibold ">Apply</button>
                </div>
                <div className="py-6 text-[#101928] font-semibold flex flex-col border-b border-[#E4E7EC]">
                    <p>Pay With</p>
                    <div className="flex flex-col gap-4 pt-5">
                    {paymentOptions.map((option) => (
                        <label key={option.id} className="flex items-center space-x-2 cursor-pointer font-medium">
                        <input
                            type="radio"
                            name="paymentOption"
                            value={option.id}
                            checked={selectedOption === option.id}
                            onChange={() => handleOptionChange(option.id)}
                            className="form-radio text-orange-500 focus:ring-orange-400"
                        />
                        <span>{option.label}</span>
                        </label>
                    ))}
                    </div>

                </div>

                <PaymentCard/>

                <div className="py-6 border-b border-[#E4E7EC]">
                    <div className="flex flex-col gap-4 text-sm text-[#475367]">
                        <div className="flex justify-between items-center">
                            <p>Sub Total</p>
                            <p>₦40,000.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Tax (10%)</p>
                            <p>₦4,000.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p>Shipping</p>
                            <p>₦0.00</p>
                        </div>

                    </div>

                </div>

                <div className="flex justify-between pt-6">
                    <p className="font-medium text-sm">Total</p>
                    <p className="text-[#1D2739] font-semibold">₦44,000.00</p>
                </div>

                <Link href="/" className="text-[#FFFFFF] bg-[#EB5017] w-full py-4 mt-[28px] px-6 my-4 flex justify-center items-center font-semibold rounded-full">Pay ₦44,000.00</Link>


            

            </div>

        </div>
    </>
  )
}

export default Payment