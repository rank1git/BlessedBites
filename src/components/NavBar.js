import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown';


const NavBar = () => {
	return (
		<>
			<nav className=" flex gap-5 mt-5 pl-5 justify-center">
				<Dropdown category={'Meals'} />
				<Dropdown category={'Cuisines'} />
				<Dropdown category={'Ingredients'} />
				<Dropdown category={'Drinks'} />
				{/* <NavLink to="/dinner">Dinner </NavLink>
				<NavLink to="/lunch">Lunch</NavLink>
				<NavLink to="/breakfast">Breakfast</NavLink>
				<NavLink to="/snacks-apps">Snacks</NavLink>
				<NavLink to="/drinks">Drinks</NavLink> */}
			</nav>
		</>
	);
};

export default NavBar;
