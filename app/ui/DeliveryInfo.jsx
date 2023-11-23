'use client'
import { useState } from "react"

const DeliveryInfo = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: "",
        city: "",
        zip: '',
        mobile: '',
        email: '',

      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission
        console.log('Form submitted:', formData);
      };    
  return (
    <>
        <div className="w-full max-w-[760px] mt-10 py-8 px-2 md:px-8  rounded-[10px] border border-[#E4E7EC mt-4 mb-10">
            <div className='flex flex-col'>
                <p className='text-[#101928] text-2xl font-semibold'>Delivery Information</p>

                <form className="my-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#344054]">
                        First Name
                        </label>
                        <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Placeholder"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Last Name
                        </label>
                        <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Placeholder"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    </div>


                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-[#344054]">
                        Address
                        </label>
                        <input
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Placeholder"
                        value={formData.address}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-[#D0D5DD] rounded-md"
                        />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-sm font-medium text-[#344054]">
                        City/Town
                        </label>
                        <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Placeholder"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="zip" className="block text-sm font-medium text-[#344054]">
                        Zip Code
                        </label>
                        <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="Placeholder"
                        value={formData.zip}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-">
                        <label htmlFor="mobile" className="block text-sm font-medium text-[#344054]">
                        Mobile Number
                        </label>
                        <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        placeholder="Placeholder"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                        </label>
                        <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Placeholder"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                        />
                    </div>
                    
                    </div>
            </form>

            </div>
                

        </div>
    </>
  )
}

export default DeliveryInfo