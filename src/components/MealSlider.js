import React, { useState } from 'react';
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react';
import '../styles/img-slider.css'

const images = [
  {
    url: "https://cdn.dummyjson.com/recipe-images/10.webp",
    name: 'Shrimp Scampi Pasta',
    makeAgain: '92% would make this again'
  },
  {
    url: "https://cdn.dummyjson.com/recipe-images/18.webp",
    name: 'Korean Bimibap',
    makeAgain: '89% would make this again'
  },
  {
    url: "https://cdn.dummyjson.com/recipe-images/24.webp",
    name: 'Turkish Kebabs',
    makeAgain: '81% would make this again'
  },
  {
    url: "https://cdn.dummyjson.com/recipe-images/33.webp",
    name: 'Mediterranean Quinoa Salad',
    makeAgain: '91% would make this again'
  },
  {
    url: "https://cdn.dummyjson.com/recipe-images/41.webp",
    name: 'Caprese Bruschetta',
    makeAgain: '85% would make this again'
  },
];

const MealSlider = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const showNextImg = () => {
    setImgIndex(imgIndex + 1 <= images.length - 1 ? imgIndex + 1 : 0)
  }
  const showPrevImg = () => {
    setImgIndex(imgIndex - 1 >= 0 ? imgIndex - 1 : images.length - 1)
  }
 
  return (
    <div className="w-2/3 aspect-video my-10 mx-auto min-h-[480px] min-w-[480px]" >
      <div className="w-full h-full relative">
        <img src={images[imgIndex].url} alt='food' className='img-slider-img'/>
        <div className='absolute xs:bottom-6 sm:bottom-5 lg:bottom-3 left-14 font-serif px-2 text-white xs:text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl  bg-black bg-opacity-40 xs:rounded-md rounded-lg'>{images[imgIndex].makeAgain}</div>
        <div className='absolute bottom-10 left-10 font-serif px-2 text-white xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-black bg-opacity-40 rounded-lg'>{images[imgIndex].name}</div>
        <button onClick={showPrevImg} className='img-slider-btn' style={{left: 0}}><ArrowBigLeft /></button>
        <button onClick={showNextImg} className='img-slider-btn' style={{right: 0}}><ArrowBigRight /></button>
      </div>
    </div>
    
  )
}

export default MealSlider;