import React,  {useState} from 'react';
import Footer from '../components/Footer';
import TopBar2 from '../components/TopBar2';
import { useSelector } from 'react-redux';

const AllRecipes = () => {
  const [endIndex, setEndIndex] = useState(20);
  const [showMore, setShowMore] = useState(true);
  const {data} = useSelector(state => state.recipes);

  const handleMoreRecipes = () => {
    if(endIndex + 8 > data.recipes.length - 1){
      setShowMore(false);
      setEndIndex(data.recipes.length);
    } else {
      setEndIndex(endIndex + 8);
    } 
  }

  return (
    <div>
      <TopBar2 />
      <div className='mt-20 mb-20'>
        <h1 className='text-3xl font-bold font-serif ml-5 justify-self-center mb-6'>All Recipes</h1>
        <hr className='mb-10' />
        {data.recipes && (
          <div>
            <ul className='flex flex-wrap w-full gap-4 px-4'>
              {data.recipes.slice(0, endIndex).map((recipe) => 
                <li key={recipe.id} className='flex-1 min-w-[20%] max-w-[24%]'><img className='rounded-xl' src={recipe.image} alt={recipe.name} />{recipe.name} | {recipe.cuisine}</li>
              )}
            </ul>
            {showMore && <button className='flex border-2 border-black px-2 py-1 hover:bg-gray-300 justify-self-center mt-6' onClick={handleMoreRecipes}>Load More Recipes</button>}
          </div>
        )}
      </div>
			<Footer endpoint={'recipes?limit=0'} />
    </div>
  )
}

export default AllRecipes