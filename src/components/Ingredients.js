import { Circle } from "lucide-react"


const Ingredients = (currRecipe) => {
  console.log(currRecipe.currRecipeData)
  return (
    <div>
      <h1 className="text-2xl font-bold font-serif hover:text-gray-500 inline-block">Ingredients</h1>
      {currRecipe && (
        <ul>
          {currRecipe.currRecipeData.ingredients.map((ingredient) => (
            <li className='flex gap-2 my-5' key={ingredient}><Circle />{ingredient}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Ingredients
