import { MessageSquare, Calendar } from 'lucide-react';
import { useSelector } from 'react-redux';

const SuperDelicious = () => {
  const { data } = useSelector(state => state.recipes);
  
  return (
    <div>
      <h1 className='text-4xl font-bold font-serif ml-5'>Super Delicious</h1>
      {data.recipes && (
        <div className='mt-10'>
          <ul className='flex flex-wrap w-full px-4 gap-4'>
            <li className='Caprese-Salad-container flex-col flex-1 min-w-[25%]'>
              <div className='food-photo '>
                <img className='rounded-t-xl' src={data.recipes[8]?.image} alt='caprese salad' />
              </div>
              <div className='food-information'>
                <div><img className='w-40 ml-3' src='./5stars.png' alt='food' /></div>
                <p className='ml-3 text-3xl font-sans '>{data.recipes[8].name}</p>
                <div></div>
                <div className='flex flex-row'>
                  <div><img className='ml-3 rounded-full h-16 w-16 object-cover' src='../profpic1.jpg' alt='person 1' /></div>
                  <div className='self-center ml-5'>Terry Lawson</div>
                </div>
                <div className='flex flex-row gap-2'>
                  <Calendar />
                  Yesterday
                  <p className='empty p tag for spacing'></p>
                  <MessageSquare />
                  {data.recipes[8].reviewCount}
                </div>
              </div>
            </li>

            <li className='Caprese-salad-container flex-col flex-1 min-w-[25%]'>
              <div className='food-photo '>
                <img className='rounded-t-xl' src={data.recipes[13]?.image} alt='caprese salad' />
              </div>
              <div className='food-information'>
                <div><img className='w-40 ml-3' src='./5stars.png' alt='food' /></div>
                <p className='ml-3 text-3xl font-sans '>{data.recipes[13].name}</p>
                <div></div>
                <div className='flex flex-row'>
                  <div><img className='ml-3 rounded-full h-16 w-16 object-cover' src='../profpic2.jpeg' alt='person 2' /></div>
                  <div className='self-center ml-5'>Frankie Jensen</div>
                </div>
                <div className='flex flex-row gap-2'>
                  <Calendar />
                  Yesterday
                  <p className='empty p tag for spacing'></p>
                  <MessageSquare />
                  {data.recipes[13].reviewCount}
                </div>
              </div>
            </li>

            <li className='Caprese-Salad-container flex-col flex-1 min-w-[25%]'>
              <div className='food-photo '>
                <img className='rounded-t-xl' src={data.recipes[16]?.image} alt='caprese salad' />
              </div>
              <div className='food-information'>
                <div><img className='w-40 ml-3' src='./5stars.png' alt='food' /></div>
                <p className='ml-3 text-3xl font-sans '>{data.recipes[16].name}</p>
                <div></div>
                <div className='flex flex-row'>
                  <div><img className='ml-3 rounded-full h-16 w-16 object-cover' src='../profpic3.jpg' alt='person 3' /></div>
                  <div className='self-center ml-5'>Aracely Waters</div>
                </div>
                <div className='flex flex-row gap-2'>
                  <Calendar />
                  Yesterday
                  <p className='empty p tag for spacing'></p>
                  <MessageSquare />
                  {data.recipes[16].reviewCount}
                </div>
              </div>
            </li>

            <li className='Caprese-Salad-container flex-col flex-1 min-w-[25%]'>
              <div className='food-photo '>
                <img className='rounded-t-xl' src={data.recipes[19]?.image} alt='caprese salad' />
              </div>
              <div className='food-information'>
                <div><img className='w-40 ml-3' src='./5stars.png' alt='food' /></div>
                <p className='ml-3 text-3xl font-sans '>{data.recipes[19].name}</p>
                <div></div>
                <div className='flex flex-row'>
                  <div><img className='ml-3 rounded-full h-16 w-16 object-cover' src='../profpic4.jpg' alt='person 4' /></div>
                  <div className='self-center ml-5'>Tamia Gibson</div>
                </div>
                <div className='flex flex-row gap-2'>
                  <Calendar />
                  Yesterday
                  <p className='empty p tag for spacing'></p>
                  <MessageSquare />
                  {data.recipes[19].reviewCount}
                </div>
              </div>
            </li>

            <li className='Caprese-Salad-container flex-col flex-1 min-w-[25%]'>
              <div className='food-photo '>
                <img className='rounded-t-xl' src={data.recipes[20]?.image} alt='caprese salad' />
              </div>
              <div className='food-information'>
                <div><img className='w-40 ml-3' src='./5stars.png' alt='food' /></div>
                <p className='ml-3 text-3xl font-sans '>{data.recipes[20].name}</p>
                <div></div>
                <div className='flex flex-row'>
                  <div><img className='ml-3 rounded-full h-16 w-16 object-cover' src='../profpic5.webp' alt='person 6' /></div>
                  <div className='self-center ml-5'>Kareem Herman</div>
                </div>
                <div className='flex flex-row gap-2'>
                  <Calendar />
                  Yesterday
                  <p className='empty p tag for spacing'></p>
                  <MessageSquare />
                  {data.recipes[20].reviewCount}
                </div>
              </div>
            </li>

            <li className='Caprese-Salad-container flex-col flex-1 min-w-[25%]'>
              <div className='food-photo '>
                <img className='rounded-t-xl' src={data.recipes[23]?.image} alt='caprese salad' />
              </div>
              <div className='food-information'>
                <div><img className='w-40 ml-3' src='./5stars.png' alt='food' /></div>
                <p className='ml-3 text-3xl font-sans '>{data.recipes[23].name}</p>
                <div></div>
                <div className='flex flex-row'>
                  <div><img className='ml-3 rounded-full h-16 w-16 object-cover' src='../profpic6.webp' alt='person 6' /></div>
                  <div className='self-center ml-5'>Armani Hart</div>
                </div>
                <div className='flex flex-row gap-2'>
                  <Calendar />
                  Yesterday
                  <p className='empty p tag for spacing'></p>
                  <MessageSquare />
                  {data.recipes[23].reviewCount}
                </div>
              </div>
            </li> 
          </ul>
        </div>
      )}
    </div>
  )
}

export default SuperDelicious