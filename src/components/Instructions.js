import { Circle } from 'lucide-react'
import React from 'react'

const Instructions = (currRecipe) => {
  return (
    <div>
      <h1 className='text-2xl font-bold font-serif hover:text-gray-500 inline-block'>Instructions</h1>
      {currRecipe && (
        <ul>
          {currRecipe.currRecipeData.instructions.map((instruction) => (
            <li className='flex gap-2 my-5' key={instruction}><Circle />{instruction}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Instructions
