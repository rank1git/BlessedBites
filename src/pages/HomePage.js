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
import { useSelector } from 'react-redux';


const HomePage = () => {
	const { data } = useSelector(state => state.recipes);
	
	return (
		<div className=''>
			<TopBar />
			<img src='./blessed-bites-high-resolution-logo-transparent.png' alt='logo' className='h-24 justify-self-center mt-20' />
			<NavBar />
			{data.recipes && (
				<>
					<MealSlider />
					<div className='mb-20'>
						<PopularCategories />
					</div>
					<div className='mb-20'>
						<SuperDelicious />
					</div>
					<CuratedCollections />
					<LatestRecipes />
				</>
			)}
			<Inbox />
			<Footer endpoint={'recipes?limit=0'} />
		</div>
	);
};

export default HomePage;
