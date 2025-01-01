import {useState} from 'react';
import { useSelector } from 'react-redux';

const LatestRecipes = () => {
  const { data } = useSelector(state => state.recipes);
  const [endIndex, setEndIndex] = useState(20);
  const [showMore, setShowMore] = useState(true);
  
  const handleMoreRecipes = () => {
    if(endIndex + 8 > data.recipes.length - 1){
      setShowMore(false);
      setEndIndex(data.recipes.length);
    } else {
      setEndIndex(endIndex + 8);
    } 
  }
  console.log(data.recipes)
  
  return (
    <div className='mt-20'>
      <h1 className='text-3xl font-bold font-serif ml-5'>Latest Recipes</h1>
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
  )
}

export default LatestRecipes
