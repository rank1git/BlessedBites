import React from 'react'
import { useSelector } from 'react-redux';

const PopularCategories = () => {
  const { data } = useSelector(state => state.recipes)
  const images = [data?.recipes[45], data?.recipes[27], data?.recipes[48], data?.recipes[41], data?.recipes[21], data?.recipes[2]];
  
  return (
    <div>
      <h1 className='text-4xl font-bold font-serif ml-5'>Popular Categories</h1>
      {data.recipes && (
        <ul className='flex justify-evenly'>
          {images.map(recipe => 
            <li key={recipe.id}><img className='mt-10 h-40 w-40 rounded-full object-scale-down' src={recipe.image} alt='food' /><p className='mt-4 justify-self-center font-medium text-xl'>{recipe.name}</p></li>
          )}
        </ul>
      )}
    </div>
  )
}

export default PopularCategories
