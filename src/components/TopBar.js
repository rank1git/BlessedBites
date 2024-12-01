import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import fb from '../img/facebook.svg';
import x from '../img/twitter.svg';
import ig from '../img/instagram.svg';
import yt from '../img/youtube.svg';
import search from '../img/search.svg';

const TopBar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [query, setQuery] = useState('');

	const handleSearchClick = () => {
		setIsExpanded(!isExpanded);
	};

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div className="w-full fixed top-0 z-50 bg-white">
			<div className="flex flex-row w-full py-3 px-4 justify-between items-center shadow-md ">
				<div className='flex flex-row w-1/6 justify-between'>
					<a
						href="https://www.facebook.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={fb} alt="Facebook" className="w-8 opacity-70 transition-shadow hover:shadow-2xl" />
					</a>
					<a
						href="https://www.twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={x} alt="Twitter" className="w-8 opacity-70 hover:border-black hover:border-2 hover:rounded" />
					</a>
					<a
						href="https://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={ig} alt="Instagram" className="w-8 opacity-70 hover:border-black hover:border-2 hover:rounded" />
					</a>
					<a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yt} alt='YouTube' className='w-8 opacity-70 hover:border-black hover:border-2 hover:rounded'/>
            </a>
				</div>
				<div className='flex flex-row justify-between w-1/3'>
					<button onClick={handleSearchClick} className="search-icon">
						<img src={search} alt="searchbar" className="w- ml-10" />
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
					<button className='bg-transparent border-2 border-black rounded ml-10 px-8 hover:bg-gray-300' >
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
