import React, { useState , useEffect } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

function ImageSlider({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchUrl(getUrl) {
    try {
      setIsLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if(data) {
        setImages(data);        
        setIsLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  }

  function handlePrev() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function handleNext() {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handleIndicatorClick(index) {
    setCurrentImageIndex(index);
  }

  useEffect(() => {
    if(url !== "")
      fetchUrl(url)
  },[url, page, limit]);

  if(isLoading) {
    return <div className='text-center text-3xl'>Please wait until we load images for you!</div>
  }

  if(errorMessage) {
    return <div className='text-center text-3xl'>Sorry! Some error occurred | {errorMessage}</div>
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-[#192A56]'>
      <div className='flex w-3xl relative justify-center items-center overflow-hidden shadow-[#2B2B52] shadow-lg'>
        <BsArrowLeftCircleFill 
          className='absolute left-4 fill-white cursor-pointer hover:fill-gray-600 transition'
          size={30}
          onClick={handlePrev}
        />
        {images && images.length > 0 &&
        images.map((image, index)=>(
          <img 
            key={image.id} 
            src={image.download_url} 
            alt={image.download_url} 
            className={currentImageIndex === index ? 'rounded-md':'hidden'}
          />
        ))}
        <BsArrowRightCircleFill
          className='absolute right-4 fill-white cursor-pointer hover:fill-gray-600 transition'
          size={30}
          onClick={handleNext}
        />
        <span className='flex absolute bottom-4 gap-2'>
          {images && images.length > 0 &&
            images.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full border-none outline-none cursor-pointer transition duration-100 ${
                  currentImageIndex === index ? 'bg-white' : 'bg-gray-500'
                }`}
                onClick={() => handleIndicatorClick(index)}
              />
            ))
          }
        </span>
      </div>
    </div>
  )
}

export default ImageSlider