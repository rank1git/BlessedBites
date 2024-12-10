import React from 'react'
import TopBar2 from '../components/TopBar2'
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const recipeIdArr = [1, 3, 5, 10, 13, 16, 20, 22, 28, 46, 47, 49]

const Categories = () => {
  const { data } = useSelector(state => state.recipes);

  const categories = ['Pizza', 'Dessert', 'Pakistani', 'Pasta', 'Lunch', 'Dinner', 'Chicken', 'Smoothies', 'Breakfast', 'Italian', 'Vegetarian', 'Salad'];
  const recipeCategories = data.recipes && data.recipes.filter(recipe => recipeIdArr.includes(recipe.id))

  return (
    <div className='mt-24'>
      <TopBar2 />
      <h1 className='flex text-4xl font-bold font-serif ml-5 justify-center'>Categories</h1>
      <hr className='my-6' />
      {data.recipes && (
        <ul className='flex flex-wrap gap-8 px-10 mb-20'>
          {recipeCategories.map((recipe, i) => (
            <li key={i} className='flex flex-col gap-2 flex-1 min-w-[20%] items-center'>
              <NavLink to={`/${categories[i]}`.toLowerCase()}>
                <img className='rounded-full' src={recipe.image} alt='food' />
              </NavLink>
              <p className='font-medium text-2xl'>{categories[i]}</p>
            </li>
          ))}
        </ul>
      )}
      <Footer endpoint={'recipes?limit=0'} />
    </div>
  )
}

export default Categories
