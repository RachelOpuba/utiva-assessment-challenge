'use client'
import  { useState } from 'react';
import { FaStar } from "react-icons/fa6";

const StarRating = ({ initialRating = 5, onChange }) => {
    const [rating, setRating] = useState(initialRating);
  
    const handleClick = (newRating) => {
      setRating(newRating);
      onChange && onChange(newRating);
    };
  
    return (
        <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((index) => (
          <span key={index} className="rounded-full ">
            <button
              className={`text-2xl ${
                index <= rating ? 'text-[#f56630]' : 'text-gray-300'
              }`}
              onClick={() => handleClick(index)}
            >
            <FaStar className='text-lg'/>

            </button>
          </span>
        ))}
      </div>
    );
  };
  
  export default StarRating;