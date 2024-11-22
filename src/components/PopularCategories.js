import React from 'react'

const images = [
  {
   url: "https://cdn.dummyjson.com/recipe-images/46.webp", 
   name: 'Pasta'
  },
  {
  url: "https://cdn.dummyjson.com/recipe-images/28.webp", 
  name: 'Breakfast'
  },
  {
  url: "https://cdn.dummyjson.com/recipe-images/49.webp", 
  name: 'Salad'
  },
  {
  url: "https://cdn.dummyjson.com/recipe-images/42.webp", 
  name: 'Stir-Fry'
  },
  {
  url: "https://cdn.dummyjson.com/recipe-images/22.webp", 
  name: 'Smoothies'
  },
  {
  url: "https://cdn.dummyjson.com/recipe-images/3.webp", 
  name: 'Desserts'
  },
]

const PopularCategories = () => {
  return (
    <div>
      <h1 className='text-4xl font-bold font-serif ml-5'>Popular Categories</h1>
      <ul className='flex justify-evenly'>
        {images.map(image => 
          <li><img className='mt-10 h-40 w-40 rounded-full object-scale-down' src={image.url} alt='food' /><p className='mt-4 justify-self-center font-medium text-xl'>{image.name}</p></li>
        )}
        {/* <li>Pasta</li>
        <li>Breakfast</li>
        <li>Salad</li>
        <li>Stir-Fry</li>
        <li>Smoothies</li>
        <li>Desserts</li> */}
      </ul>
    </div>
  )
}

export default PopularCategories
