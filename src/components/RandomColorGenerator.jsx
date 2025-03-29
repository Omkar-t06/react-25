import React, { useEffect, useState } from 'react'

function RandomColorGenerator() {
  const [colorType, setColorType] = useState('hex');
  const [bgColor, setBgColor] = useState('#000000');

  const randomColorUtility = (length) => Math.floor(Math.random() * length)

  const createHexColor = () => {
    const hex = '0123456789ABCDEF';
    let hexColor = '#';

    for(let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }

    setBgColor(hexColor);
  }

  const createRGBColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setBgColor(`rgb(${r}, ${g}, ${b})`)
  }

  useEffect(() => {
    if(colorType === "hex") createHexColor()
    else createRGBColor()
  },[colorType]);

  return (
    <div
      className='h-screen w-screen'
      style={{ background: bgColor }}
    >
      <div className='flex justify-center'>
        <button
        className='bg-blue-500 hover:bg-blue-300 text-white p-2 m-2 rounded-md'
        onClick={() => setColorType("hex")}
        >
          Create HEX Color
        </button>
        <button
        className='bg-blue-500 hover:bg-blue-300 text-white p-2 m-2 rounded-md'
        onClick={() => setColorType("rgb")}
        >
          Create RGB Color
        </button>
        <button
          className='bg-blue-500 hover:bg-blue-300 text-white p-2 m-2 rounded-md'
          onClick={
            colorType === "hex"
              ? createHexColor
              : createRGBColor
          }
        >
          Generate Random Color
        </button>
      </div>
      <div 
        className='flex flex-col justify-center items-center'
      >
        <h3 className='text-2xl text-white m-3'>{colorType === 'hex'? "Hex Color" : "RGB Color"}</h3>
        <h1 className='text-5xl text-white'>{bgColor}</h1>
      </div>
    </div>
  )
}

export default RandomColorGenerator