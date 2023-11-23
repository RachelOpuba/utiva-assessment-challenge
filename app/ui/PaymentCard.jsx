'use client'
import {useState} from 'react'

const PaymentCard = () => {
    const [formData, setFormData] = useState({
        cardholderName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };


  return (
    <>
        <form className='py-6 text-[#101928] font-semibold flex flex-col border-b border-[#E4E7EC]'>
        <p className="font-semibold pb-4">Enter Card Information</p>
         <div className="mb-4">
        <label htmlFor="cardholderName" className="block text-sm font-medium text-[#344054]">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholderName"
          name="cardholderName"
          placeholder='Alexandra McPherson Grey'
          value={formData.cardholderName}
          onChange={handleChange}
          className="mt-1 p-2 h-[56px] w-full border border-gray-300 rounded-md placeholder:text-[#98A2B3] placeholder:text-sm"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="cardNumber" className="block text-sm font-medium text-[#344054]">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder='5061 2345 6789 1234'
          value={formData.cardNumber}
          onChange={handleChange}
          className="mt-1 p-2  h-[56px] w-full border border-gray-300 rounded-md placeholder:text-[#98A2B3] placeholder:text-sm"
        />
      </div>
      <div className="flex mb-4">
        <div className="flex-1 mr-2">
          <label htmlFor="expiryDate" className="block text-sm font-medium text-[#344054]">
            Expiry Date
          </label>
          <input
            type="text"
            id="expiryDate"
            name="expiryDate"
            placeholder='09/2024'
            value={formData.expiryDate}
            onChange={handleChange}
            className="mt-1 p-2 h-[56px] w-full border border-gray-300 rounded-md placeholder:text-[#98A2B3] placeholder:text-sm"
          />
        </div>
        <div className="flex-1 ml-2">
          <label htmlFor="cvv" className="block text-sm font-medium text-[#344054]">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder='123'
            value={formData.cvv}
            onChange={handleChange}
            className="mt-1 p-2 h-[56px] w-full border border-gray-300 rounded-md placeholder:text-[#98A2B3] placeholder:text-sm"
          />
        </div>
       
      </div>
      </form>
    </>
  )
}

export default PaymentCard