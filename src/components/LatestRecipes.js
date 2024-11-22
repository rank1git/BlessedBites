import React, {useState} from 'react'
import Recipes from '../recipes'

const LatestRecipes = () => {
  const [recipeData, setRecipeData] = useState(null);
  const [endIndex, setEndIndex] = useState(20);
  const [showMore, setShowMore] = useState(true);

  const handleRecipes = (data) => {
    setRecipeData(data.recipes);
  }

  const handleMoreRecipes = () => {
    if(endIndex + 8 > recipeData.length - 1){
      setShowMore(false);
      setEndIndex(recipeData.length);
    } else {
      setEndIndex(endIndex + 8);
    } 
  }
  
  return (
    <div className='mt-20'>
      <Recipes endpoint={'recipes?limit=0'} onDataFetched={handleRecipes} />
      <h1 className='text-3xl font-bold font-serif ml-5'>Latest Recipes</h1>
      {recipeData && (
        <div>
          <ul className='flex flex-wrap w-full gap-4 px-4'>
            {recipeData.slice(0, endIndex).map((recipe) => 
              <li className='flex-1 min-w-[20%] max-w-[24%]'><img className='rounded-xl' src={recipe.image} alt={recipe.name} />{recipe.name} | {recipe.cuisine}</li>
            )}
          </ul>
          {showMore && <button className='flex border-2 border-black px-2 py-1 hover:bg-gray-300 justify-self-center mt-6' onClick={handleMoreRecipes}>Load More Recipes</button>}
        </div>
      )}
    </div>
  )
}

export default LatestRecipes
