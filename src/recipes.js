import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './features/recipes/recipeSlice';

const Recipes = ({endpoint, recipeArr}) => {
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector(state => state.recipes);

	useEffect(() => {
		dispatch(fetchData(endpoint));
		console.log(data?.recipes)
	}, [dispatch]);
	console.log(data?.recipes)

	return (
		<div>
			<h1>recipe data</h1>
			{loading && <p>Loading...</p>}
			{error && <div>Error</div>}
			{data.recipes &&(<ul>
				{data?.recipes.map(item => (
					<li key={item.id}>
						{item.name} {item.id-1}
						<img className="w-60" src={item.image} alt={item.name} />
					</li>
				))}
			</ul>)}
		</div>
	)
};

export default Recipes;
