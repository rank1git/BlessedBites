import React from 'react';
import { NavLink } from 'react-router-dom';
import infinity from '../img/infinity.gif';

const NotFoundPage = () => {
	return (
		<div className="h-screen bg-black flex flex-col justify-center items-center">
			<p className="text-white text-2xl">404 not found</p>
			<img src={infinity} alt="infinity spinning" className="w-60" />
			<NavLink to="/" className="text-white text-2xl">
				Back to home
			</NavLink>
		</div>
	);
};

export default NotFoundPage;
