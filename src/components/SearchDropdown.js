import React from 'react'

const SearchDropdown = ({filteredItems}) => {
  return (
    <div className='absolute top-full right-auto w-48 mt-2 bg-white shadow-lg border rounded-md'>
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map(item => (
            <li key={item.id} className="p-2 border-b hover:bg-gray-200 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-2 text-gray-500">No results found</div>
      )}
    </div>
    
  )
}

export default SearchDropdown
