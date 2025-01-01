import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TopBar2 from './TopBar2';
import Footer from './Footer';
import { Calendar, MessageSquare, SquarePen } from 'lucide-react';
import { useEffect } from 'react';
import { fetchData } from '../features/recipes/recipeSlice';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

const RecipeTemplate = () => {
  const {currRecipe} = useParams();
  const dispatch = useDispatch();
  const { data, status } = useSelector(state => state.recipes);

  useEffect(() => {
    if(!data.recipes || data.recipes.length === 0) {
      dispatch(fetchData('recipes?limit=0'))
    }
  }, [dispatch, data]);
  const categories = {
    "classic-margherita-pizza": "Classic Margherita Pizza",
    "vegetarian-stir-fry": "Vegetarian Stir-Fry",
    "chocolate-chip-cookies": "Chocolate Chip Cookies",
    "chicken-alfredo-pasta": "Chicken Alfredo Pasta",
    "mango-salsa-chicken": "Mango Salsa Chicken",
    "quinoa-salad-with-avocado": "Quinoa Salad with Avocado",
    "tomato-basil-bruschetta": "Tomato Basil Bruschetta",
    "beef-and-broccoli-stir-fry": "Beef and Broccoli Stir-Fry",
    "caprese-salad": "Caprese Salad",
    "shrimp-scampi-pasta": "Shrimp Scampi Pasta",
    "chicken-biryani": "Chicken Biryani",
    "chicken-karahi": "Chicken Karahi",
    "aloo-keema": "Aloo Keema",
    "chapli-kebabs": "Chapli Kebabs",
    "saag-(spinach)-with-makki-di-roti": "Saag (Spinach) with Makki di Roti",
    "japanese-ramen-soup": "Japanese Ramen Soup",
    "moroccan-chickpea-tagine": "Moroccan Chickpea Tagine",
    "korean-bibimbap": "Korean Bibimbap",
    "greek-moussaka": "Greek Moussaka",
    "butter-chicken-(murgh-makhani)": "Butter Chicken (Murgh Makhani)",
    "thai-green-curry": "Thai Green Curry",
    "mango-lassi": "Mango Lassi",
    "italian-tiramisu": "Italian Tiramisu",
    "turkish-kebabs": "Turkish Kebabs",
    "blueberry-banana-smoothie": "Blueberry Banana Smoothie",
    "mexican-street-corn-(elote)": "Mexican Street Corn (Elote)",
    "russian-borscht": "Russian Borscht",
    "south-indian-masala-dosa": "South Indian Masala Dosa",
    "lebanese-falafel-wrap": "Lebanese Falafel Wrap",
    "brazilian-caipirinha": "Brazilian Caipirinha",
    "spanish-patatas-bravas": "Spanish Patatas Bravas",
    "vietnamese-fresh-spring-rolls": "Vietnamese Fresh Spring Rolls",
    "mediterranean-quinoa-salad": "Mediterranean Quinoa Salad",
    "japanese-matcha-green-tea-ice-cream": "Japanese Matcha Green Tea Ice Cream",
    "brazilian-chocolate-brigadeiros": "Brazilian Chocolate Brigadeiros",
    "mexican-chicken-enchiladas": "Mexican Chicken Enchiladas",
    "thai-coconut-shrimp-curry": "Thai Coconut Shrimp Curry",
    "greek-spanakopita": "Greek Spanakopita",
    "moroccan-couscous-salad": "Moroccan Couscous Salad",
    "classic-mojito": "Classic Mojito",
    "caprese-bruschetta": "Caprese Bruschetta",
    "teriyaki-chicken-stir-fry": "Teriyaki Chicken Stir-Fry",
    "mango-avocado-salsa": "Mango Avocado Salsa",
    "shrimp-and-asparagus-stir-fry": "Shrimp and Asparagus Stir-Fry",
    "italian-margherita-pizza": "Italian Margherita Pizza",
    "pesto-pasta-with-cherry-tomatoes": "Pesto Pasta with Cherry Tomatoes",
    "hawaiian-chicken-skewers": "Hawaiian Chicken Skewers",
    "cucumber-avocado-rolls": "Cucumber Avocado Rolls",
    "mediterranean-chickpea-salad": "Mediterranean Chickpea Salad",
    "pineapple-coconut-smoothie": "Pineapple Coconut Smoothie"
  };
  const currRecipeData = data?.recipes?.find((recipe) => recipe.name === categories[currRecipe]);
  console.log(currRecipeData)

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (!currRecipeData) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      {currRecipeData && (
        <div className='h-full w-full'>
          <TopBar2/>
          <div className='flex flex-col mt-20 mb-20 h-5/6 w-full'>
            <h1 className='text-3xl font-bold font-serif ml-5'>{currRecipeData.name}</h1>
            <div className='flex flex-row  gap-5 mt-8'>
              <div className='flex flex-row gap-2 items-center'>
                <img className='ml-3 rounded-full h-10 w-10 object-cover' src='../profpic1.jpg' alt='person 1' />
                Terry Lawson
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <Calendar/>
                Yesterday
              </div>
              <div className='flex flex-row gap-2 items-center'>
                <MessageSquare />
                {currRecipeData.reviewCount}
              </div>
              <img className='w-40 ml-3' src='/5stars.png' alt='food' />
            </div>
            <hr className='mt-8'/>
            <div className='flex flex-col mx-20 items-center'>
              <div className='h-full w-5/6 flex justify-center items-center self-center'>
                <img className='h-96 w-full object-cover rounded-xl' src={currRecipeData.image} alt={currRecipeData.name} />
              </div>
              <div className='flex flex-row my-5 gap-5'>
                <div className='flex flex-col text-base text-gray-500'>PREP TIME <p className='text-xl text-black'>{`${currRecipeData.prepTimeMinutes} MIN`}</p></div>
                <div className='flex flex-col text-base text-gray-500'>COOK TIME <p className='text-xl text-black'>{`${currRecipeData.cookTimeMinutes} MIN`}</p></div>
                <div className='flex flex-col text-base text-gray-500'>SERVINGS <p className='text-xl text-black flex gap-4'>{`${currRecipeData.servings} PEOPLE`} <SquarePen /></p></div>
              </div>
              <div className='flex'>
                <Ingredients currRecipeData={currRecipeData} />
                <Instructions currRecipeData={currRecipeData} />
              </div>
            </div>
            
            
          </div>
          <Footer endpoint={'recipes?limit=0'}/>
        </div>
      )}
   </div>
  )
}

export default RecipeTemplate