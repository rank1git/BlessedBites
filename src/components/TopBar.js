import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import fb from '../img/facebook.svg';
import x from '../img/twitter.svg';
import ig from '../img/instagram.svg';
import yt from '../img/youtube.svg';
import search from '../img/search.svg';
import Search from './Search';

const TopBar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [query, setQuery] = useState('');

	const handleSearchClick = () => {
		if(isExpanded && query.length > 0) {
			console.log(query)
			setQuery('');
		}
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
						<img src={fb} alt="Facebook" className="w-8 opacity-70 hover:border-transparent hover:border-2 hover:rounded" />
					</a>
					<a
						href="https://www.twitter.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={x} alt="Twitter" className="w-8 opacity-70 hover:border-transparent hover:border-2 hover:rounded" />
					</a>
					<a
						href="https://www.instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={ig} alt="Instagram" className="w-8 opacity-70 hover:border-transparent hover:border-2 hover:rounded" />
					</a>
					<a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={yt} alt='YouTube' className='w-8 opacity-70 hover:border-transparent hover:border-2 hover:rounded'/>
            </a>
				</div>
				<div className='flex flex-row justify-between w-1/3'>
					<Search />
					<button className='flex bg-transparent border-2 border-black rounded ml-10 px-8 hover:bg-gray-300 flex-shrink-0 w-24 justify-center' >
						Login
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
