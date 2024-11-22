import React, { useState } from 'react';
import Recipes from './recipes';

const App = () => {
	const [apiData, setApiData] = useState(null);

	const handleDataFromChild = (data) => {
		setApiData(data)
		console.log(apiData?.recipes)
	}
	console.log(apiData?.recipes)
	return (
		<div>
			<Recipes endpoint={'recipes?limit=0'} type={'image'} onDataFetched={handleDataFromChild} />
			<ul>
				{apiData?.recipes.map(item => 
					<li key={item.id}>{item.name} {item.id}<img src={item.image} alt='food' /></li>
				)}
			</ul>
		</div>
	);
};

export default App;
