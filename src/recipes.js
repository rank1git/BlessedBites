import React, { useEffect, useState } from 'react';

const Recipes = ({ endpoint, onDataFetched }) => {
	// const url = query 
	// 			? `https://dummyjson.com/${endpoint}/search?q=${query}`
	// 			: `https://dummyjson.com/${endpoint}`;
	const url = `https://dummyjson.com/${endpoint}`;

	useEffect(() => {
		fetchData(endpoint);
	}, [endpoint]);

	const fetchData = async () => {
		try {
			const res = await fetch(url);
			const result = await res.json();
			onDataFetched(result)
		} catch (err) {
			console.error('Error fetching data: ', err);
		}
	}
};

export default Recipes;

// useEffect(() => {
	// 	setLoading(true);
  //   setError(null);

	// 	const url = query 
  //         ? `https://dummyjson.com/${endpoint}/search?q=${query}`
  //         : `https://dummyjson.com/${endpoint}`;

	// 	// Fetch data when component mounts
	// 	fetch(url) 
	// 		.then((res) => {
	// 			if (!res.ok) {
	// 				throw new Error('Network response was not ok');
	// 			}
	// 			return res.json();
	// 		})
	// 		.then((data) => {
	// 			console.log(
	// 				// data.recipes.filter((recipe) => recipe.mealType.includes('Breakfast'))
	// 				data.recipes
	// 			);
	// 			setData(data.recipes)// setData(data.recipes.filter(recipe => recipe.id === 10 || recipe.id === 35 || recipe.id === 47)); // Update data state
	// 			setLoading(false); // Set loading to false after data is fetched
	// 		})
	// 		.catch((error) => {
	// 			setError(error); // Set error state if there’s an error
	// 			setLoading(false);
	// 		});
	// }, [endpoint, query]);

	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error: {error.message}</p>;

	// return (
	// 	<div>
	// 		<h1>Fetched Data</h1>
	// 		<ul>
	// 			{data.map((item) => (
	// 				<li key={item.id}>
	// 					{item.name} {item.id-1}
	// 					<img className="w-60" src={item.image} alt={item.name} />
	// 				</li>
	// 			))}
	// 		</ul>
	// 	</div>
	// );