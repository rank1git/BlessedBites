import {useState} from 'react';
import search from '../img/search.svg';
import { useSelector } from 'react-redux';
import SearchDropdown from './SearchDropdown';

const Search = () => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const { data } = useSelector(state => state.recipes);
  const recipeArr = data.recipes && data.recipes.map(recipe => recipe.name);
  const [filteredItems, setFilteredItems] = useState(recipeArr);

	const handleSearchClick = () => {
		if(isExpanded && query.length > 0) {
			console.log(query)
			setQuery('');
		}
		setIsExpanded(!isExpanded);
	};
  const handleInputChange = (e) => {
		const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    const results = recipeArr.filter(item => item.toLowerCase().includes(searchQuery));
    setFilteredItems(results);
	};
  
  return (
    <div className='flex flex-row justify-between ml-10'>
      <button onClick={handleSearchClick} className="search-icon mr-2 flex-shrink-0">
						<img src={search} alt="search icon" className='w-6' />
					</button>
      <input
        type="text"
        className={`transition-width duration-300 ease-in-out border border-gray-300 rounded-lg outline-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          isExpanded ? 'w-48 pl-2 opacity-100' : 'w-0 p-0 opacity-0'
        }`}
        placeholder="Search Recipes..."
        value={query}
        onChange={handleInputChange}
        autoFocus={isExpanded}
      />
      {query &&  (
        <SearchDropdown filteredItems={filteredItems} />
      )}
    </div>
  )
}

export default Search
