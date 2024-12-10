import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Breakfast from './pages/Breakfast';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Dessert from './pages/Dessert';
import Drinks from './pages/Drinks';
import Sides from './pages/Sides';
import SnacksApps from './pages/SnacksApps';
import TermsAndConditons from './pages/TermsAndConditons';
import About from './pages/About';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Feedback from './pages/Feedback';
import Cookies from './pages/Cookies';
import Copyright from './pages/Copyright';
import AllRecipes from './pages/AllRecipes';
import Profile from './pages/Profile.js'
import { store } from './app/store.js';
import {Provider} from 'react-redux';
import Categories from './pages/Categories.js';
import { Car, Pizza } from 'lucide-react';
import Salad from './pages/Salad.js';
import Vegetarian from './pages/Vegetarian.js';
import Italian from './pages/Italian.js';
import Smoothies from './pages/Smoothies.js';
import Chicken from './pages/Chicken.js';
import Pasta from './pages/Pasta.js';
import Pakistani from './pages/Pakistani.js';
import ScrollToTop from './components/ScrollToTop.js';
import Layout from './components/Layout.js';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<HomePage />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/breakfast',
		element: (
			<Layout>
				<Breakfast />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/lunch',
		element: (
			<Layout>
				<Lunch />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/dinner',
		element: (
			<Layout>
				<Dinner />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/dessert',
		element: (
			<Layout>
				<Dessert />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/drinks',
		element: (
			<Layout>
				<Drinks />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/sides',
		element: (
			<Layout>
				<Sides />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/snacks-apps',
		element: (
			<Layout>
				<SnacksApps />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/terms-and-conditions',
		element: (
			<Layout>
				<TermsAndConditons />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/about',
		element: (
			<Layout>
				<About />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/careers',
		element: (
			<Layout>
				<Careers />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/contact',
		element: (
			<Layout>
				<Contact />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/feedback',
		element: (
			<Layout>
				<Feedback />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/cookies',
		element: (
			<Layout>
				<Cookies />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/copyright',
		element: (
			<Layout>
				<Copyright />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/allrecipes',
		element: (
			<Layout>
				<AllRecipes />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/profile-photo',
		element: (
			<Layout>
				<Profile />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/categories',
		element: (
			<Layout>
				<Categories />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/pizza',
		element: (
			<Layout>
				<Pizza />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/pakistani',
		element: (
			<Layout>
				<Pakistani />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/pasta',
		element: (
			<Layout>
				<Pasta />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/chicken',
		element: (
			<Layout>
				<Chicken />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/smoothies',
		element: (
			<Layout>
				<Smoothies />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/italian',
		element: (
			<Layout>
				<Italian />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/vegetarian',
		element: (
			<Layout>
				<Vegetarian />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
	{
		path: '/salad',
		element: (
			<Layout>
				<Salad />
			</Layout>
		),
		errorElement: <NotFoundPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
		{/* <App /> */}
	</Provider>
);
