import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const PopularCategories = () => {
  const { data } = useSelector(state => state.recipes)
  const images = [data?.recipes[45], data?.recipes[27], data?.recipes[48], data?.recipes[41], data?.recipes[21], data?.recipes[2]];
  
  const categories = ['Pasta', 'Breakfast', 'Salad', 'Stir-Fry', 'Smoothies', 'Dessert']

  return (
    <div>
      <NavLink to='/categories'>
        <h1 className='text-4xl font-bold font-serif ml-5 hover:text-gray-500 inline-block'>Popular Categories</h1>
      </NavLink>
      {data.recipes && (
        <ul className='flex justify-evenly'>
          {images.map((recipe, i) => 
            <li className='flex flex-col items-center gap-6 w-full h-full' key={recipe.id}>
              <div className='h-40 w-40'>
                <NavLink to={`/${categories[i]}`.toLowerCase()}>
                  <img className='mt-10 h-full w-full rounded-full object-cover' src={recipe.image} alt='food' />
                </NavLink>
              </div>
              <p className='mt-4 justify-self-center font-medium text-xl text-center'>{categories[i]}</p>
            </li>
          )}
        </ul>
      )}
    </div>
  )
}

export default PopularCategories
