import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const CuratedCollections = () => {
  const {data} = useSelector(state => state.recipes);
  
  return (
    <div className='mt-20'>
      <h1 className='text-4xl font-bold font-serif ml-5'>Curated Collections</h1>
      {data.recipes && (
        <div className='mt-10'>
          <ul className='flex flex-wrap w-full gap-4 px-4'>
            <li className='flex-1 min-w-[33.33%]'>
              <div><img src={data.recipes[0].image} alt='food' /></div>
              <div className='flex flex-row justify-between pl-2 pt-2'>
                <div className='text-2xl font-sans font-medium'>Date night Pizza</div>
                <button className='border-black border-2 min-w-28 h-10 px-2 rounded hover:bg-gray-300'>
                  <NavLink to='/allrecipes'>
                    All Pizza Recipes
                  </NavLink>
                </button>
              </div>
            </li>
            <li className='flex-1 min-w-[33.33%]'>
              <div><img src={data.recipes[20].image} alt='food' /></div>
              <div className='flex flex-row justify-between pl-2 pt-2'>
                <div className='text-2xl font-sans font-medium'>Scrumptious Thai Green Curry</div>
                <button className='border-black border-2 min-w-28 h-10 px-2 rounded hover:bg-gray-300'>
                  <NavLink to='/allrecipes'>
                    All Curry Recipes
                  </NavLink>
                </button>
              </div>
            </li>
            <li className='flex-1 min-w-[33.33%]'>
              <div><img src={data.recipes[25].image} alt='food' /></div>
              <div className='flex flex-row justify-between pl-2 pt-2'>
                <div className='text-2xl font-sans font-medium'>Mouthwatering Elote</div>
                <button className='border-black border-2 min-w-28 h-10 px-2 rounded hover:bg-gray-300'>
                  <NavLink to='/allrecipes'>
                    All Elote Recipes
                  </NavLink>
                </button>
              </div>
            </li>
            <li className='flex-1 min-w-[33.33%]'>
              <div><img src={data.recipes[26].image} alt='food' /></div>
              <div className='flex flex-row justify-between pl-2 pt-2'>
                <div className='text-2xl font-sans font-medium'>Holiday-Colored Russian Borscht</div>
                <button className='border-black border-2 min-w-28 h-10 px-2 rounded hover:bg-gray-300'>
                  <NavLink to='/allrecipes'>
                    All Borscht Recipes
                  </NavLink>
                </button>
              </div>
            </li>
            <li className='flex-1 min-w-[33.33%]'>
              <div><img src={data.recipes[31].image} alt='food' /></div>
              <div className='flex flex-row justify-between pl-2 pt-2'>
                <div className='text-2xl font-sans font-medium'>Delectable Vietnamese Spring Rolls</div>
                <button className='border-black border-2 min-w-28 h-10 px-2 rounded hover:bg-gray-300 text-nowrap'>
                  <NavLink to='/allrecipes'>
                    All Spring Roll Recipes
                  </NavLink>
                </button>
              </div>
            </li>
            <li className='flex-1 min-w-[33.33%]'>
              <div><img src={data.recipes[35].image} alt='food' /></div>
              <div className='flex flex-row justify-between pl-2 pt-2'>
                <div className='text-2xl font-sans font-medium'>Everything Enchilada</div>
                <button className='border-black border-2 min-w-28 h-10 px-2 rounded hover:bg-gray-300 text-nowrap'>
                  <NavLink to='/allrecipes'>
                    All Enchilada Recipes
                  </NavLink>
                </button>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default CuratedCollections
