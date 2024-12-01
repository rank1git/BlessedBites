import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Recipes from './recipes';

const App = () => {
	const {data} = useSelector(state => state.recipes);
	console.log(data.recipes)
	return (
		<Recipes endpoint={'recipes?limit=0'} />
	)
};

export default App;
