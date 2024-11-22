import React from 'react';
import NavBar from '../components/NavBar';
import TopBar from '../components/TopBar';
import MealSlider from '../components/MealSlider';
import PopularCategories from '../components/PopularCategories';
import SuperDelicious from '../components/SuperDelicious';
import CuratedCollections from '../components/CuratedCollections';
import LatestRecipes from '../components/LatestRecipes';
import Inbox from '../components/Inbox';
import Footer from '../components/Footer';


const HomePage = () => {
	return (
		<div className=''>
			<TopBar />
			<img src='./blessed-bites-high-resolution-logo-transparent.png' alt='logo' className='h-24 justify-self-center mt-20' />
			<NavBar />
			<MealSlider />
			<PopularCategories />
			<SuperDelicious />
			<CuratedCollections />
			<LatestRecipes />
			<Inbox />
			<Footer />
		</div>
	);
};

export default HomePage;
