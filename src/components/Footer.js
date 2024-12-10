import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../features/recipes/recipeSlice';
import { NavLink } from 'react-router-dom'
import fb from '../img/facebook.svg';
import x from '../img/twitter.svg';
import ig from '../img/instagram.svg';
import yt from '../img/youtube.svg';

const Footer = ({endpoint}) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.recipes);

  const set = new Set();
  data.recipes && data.recipes.map(recipe => {
    return recipe.tags.map(tag => set.add(tag))
  })
  
  useEffect(() => {
    dispatch(fetchData(endpoint));
  }, [dispatch])

  return (
    <div>
      <hr />
      <div className='footer flex flex-col'>
        <div className='tophalf flex flex-row w-full justify-between px-10 h-64'> 
          <div className='logowords mt-5 content-center'>
            <div><img src='./blessed-bites-high-resolution-logo-transparent.png' alt='logo' className='h-10 mb-2 justify-self-center' /></div>
            <p className='font-serif'>"Feeding the Soul, One Recipe at a Time."</p>
          </div>
          <div className='links flex flex-row items-center h-full gap-6'>
            <div className='flex flex-col gap-2'>
              <strong>Blessed Bites</strong>
              <NavLink to='/about' className='font-light hover:underline'>About us</NavLink>
              <NavLink to='/careers' className='font-light hover:underline'>Careers</NavLink>
              <NavLink to='/contact' className='font-light hover:underline'>Contact us</NavLink>
              <NavLink to='/feedback' className='font-light hover:underline'>Feedback</NavLink>
            </div>
            <div className='flex flex-col gap-2'>
              <strong>Legal</strong>
              <NavLink to='/terms-and-conditions' className='font-light hover:underline'>Terms</NavLink>
              <NavLink to='/terms-and-conditions' className='font-light hover:underline'>Conditions</NavLink>
              <NavLink to='/cookies' className='font-light hover:underline'>Cookies</NavLink>
              <NavLink to='/copyright' className='font-light hover:underline'>Copyright</NavLink>
            </div>
            <div className='flex flex-col gap-2'>
              <strong>Follow</strong>
              <a href='https://facebook.com' className='font-light hover:underline'>Facebook</a>
              <a href='https://twitter.com' className='font-light hover:underline'>Twitter</a>
              <a href='https://instagram.com' className='font-light hover:underline'>Instagram</a>
              <a href='https://youtube.com' className='font-light hover:underline'>YouTube</a>
            </div>
          </div>
        </div>
        <hr />
        <div className='bottomhalf flex flex-row justify-between px-10 py-5'>
          <div className='content-center opacity-70'>© 2024 Blessed Bites - All Rights Reserved</div>
          <div className="flex flex-row justify-between w-52">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={fb} alt="Facebook" className="w-8 opacity-70" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={x} alt="Twitter" className="w-8 opacity-70" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ig} alt="Instagram" className="w-8 opacity-70" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yt} alt='YouTube' className='w-8 opacity-70'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
