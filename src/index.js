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

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/breakfast',
		element: <Breakfast />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/lunch',
		element: <Lunch />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/dinner',
		element: <Dinner />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/dessert',
		element: <Dessert />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/drinks',
		element: <Drinks />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/sides',
		element: <Sides />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/snacks-apps',
		element: <SnacksApps />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/terms-and-conditions',
		element: <TermsAndConditons />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/about',
		element: <About />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/careers',
		element: <Careers />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/contact',
		element: <Contact />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/feedback',
		element: <Feedback />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/cookies',
		element: <Cookies />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/copyright',
		element: <Copyright />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/allrecipes',
		element: <AllRecipes />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/profile-photo',
		element: <Profile />,
		errorElement: <NotFoundPage />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<RouterProvider router={router} />
		{/* <App /> */}
	</Provider>
	
	// </React.StrictMode>
);
