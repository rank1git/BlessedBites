import React, {useState} from 'react'
import Recipes from '../recipes'
import TopBar from '../components/TopBar';

const Recipe = () => {
  const [recipeData, setRecipeData] = useState(null);

  const handleRecipes = (data) => {
    setRecipeData(data.recipes);
  }

  return (
    <div>
      <TopBar />
      
    </div>
  )
}

export default Recipe
