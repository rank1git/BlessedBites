import React, {useState} from 'react'
import Dropdown from './Dropdown';
import search from '../img/search.svg';
import { NavLink } from 'react-router-dom';

const TopBar2 = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [query, setQuery] = useState('');
	const [openDropdown, setOpenDropdown] = useState(null);

	const toggleDropdown = (id) => {
		setOpenDropdown(openDropdown === id ? null : id);
	}

	const handleSearchClick = () => {
		setIsExpanded(!isExpanded);
	};

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className="flex flex-row w-full py-4 fixed top-0 z-50 bg-white space-between items-center">
			<div className='flex flex-1 justify-center'>
        <NavLink to='/'><img src='./blessed-bites-high-resolution-logo-transparent.png' alt='logo' className='h-8' /></NavLink>
      </div>
      <nav className="flex flex-2 gap-5 h-full justify-center ">
        <Dropdown 
          id='meals' 
          category={'Meals'} 
          isOpen={openDropdown === 'meals'} 
          toggleDropdown={() => toggleDropdown('meals')}
        />
				<Dropdown category={'Cuisines'} isOpen={openDropdown === 'cuisines'} toggleDropdown={() => toggleDropdown('cuisines')} />
				<Dropdown category={'Ingredients'} isOpen={openDropdown === 'ingredients'} toggleDropdown={() => toggleDropdown('ingredients')} />
				<Dropdown category={'Drinks'} />
			</nav>
			<div className='flex flex-row flex-1 gap-4 justify-center pr-10 w-full'>
				<button onClick={handleSearchClick} className="search-icon">
					<img src={search} alt="searchbar" className="ml-10" />
				</button>
				<input
					type="text"
					className={`transition-width duration-300 ease-in-out border border-gray-300 rounded-lg outline-none ${
						isExpanded ? 'w-48 pl-2 opacity-100' : 'w-0 p-0 opacity-0'
					}`}
					placeholder="Search..."
					value={query}
					onChange={handleInputChange}
					autoFocus={isExpanded}
				/>
				<NavLink to='/profile-page' >
					<img className='w-8 rounded-full' src='./blankprofile.png' alt='profile pic'/>
				</NavLink>
			</div>
		</div>
	);
};

export default TopBar2
