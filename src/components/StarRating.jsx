import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";

function StarRating({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    if(rating == currentIndex) {
      setRating(0)
      setHover(0)
    } else {
      setRating(currentIndex)
    }
  }

  const handleMouseEnter = (currentIndex) => {
    setHover(currentIndex)
  }

  const handleMouseLeave = () => {
    setHover(rating)
  }

  return (
    <div className='flex justify-center'>
       {[...Array(noOfStar)].map((_, index)=>{
            index += 1;
            return <FaStar
                key={index}
                className={index <= (hover || rating) ? 'fill-yellow-200': 'fill-black'}
                onClick={() => handleClick(index)}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                size={40}
            />
       })}
    </div>
  )
}

export default StarRating