import { ToggleLeft } from "lucide-react";
import React, { useEffect, useRef } from "react";

const Dropdown = ({ category, isOpen, toggleDropdown }) => {
    const dropdownRef = useRef(null);
    let options;

    const closeMenu = () => {
      toggleDropdown();
    }
    
    useEffect(() => {
      const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        toggleDropdown();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [toggleDropdown]);

    if(category === 'Meals') {
      options = (
        <ul className="[&>*]:bg-gray-200 [&>*:hover]:bg-white">
          <li onClick={closeMenu}>Breakfast</li>
          <li onClick={closeMenu}>Lunch</li>
          <li onClick={closeMenu}>Dinner</li>
          <li onClick={closeMenu}>Snacks & Appetizers</li>
          <li onClick={closeMenu}>Side Dishes</li>
          <li onClick={closeMenu}>Snacks</li>
          <li onClick={closeMenu}>Drinks</li>
          <li onClick={closeMenu}>Dessert</li>
        </ul>
      )
    } else if(category === 'Cuisines') {
      options = (
        <ul className="[&>*]:bg-gray-200 [&>*:hover]:bg-white">
          <li onClick={closeMenu}>Italian</li>
          <li onClick={closeMenu}>Asian</li>
          <li onClick={closeMenu}>American</li>
          <li onClick={closeMenu}>Mexican</li>
          <li onClick={closeMenu}>Mediterranean</li>
          <li onClick={closeMenu}>Pakistani</li>
          <li onClick={closeMenu}>Moroccan</li>
          <li onClick={closeMenu}>Greek</li>
          <li onClick={closeMenu}>Japanese</li>
          <li onClick={closeMenu}>Korean</li>
          <li onClick={closeMenu}>Thai</li>
          <li onClick={closeMenu}>Russian</li>
          <li onClick={closeMenu}>Indian</li>
          <li onClick={closeMenu}>Lebanese</li>
          <li onClick={closeMenu}>Brazilian</li>
          <li onClick={closeMenu}>Spanish</li>
          <li onClick={closeMenu}>Vietnamese</li>
        </ul>
      )
    } else if(category === 'Ingredients') {
      options = (
        <ul className="[&>*]:bg-gray-200 [&>*:hover]:bg-white">
          <li onClick={closeMenu}>Chicken</li>
          <li onClick={closeMenu}>Beef</li>
          <li onClick={closeMenu}>Vegetables</li>
          <li onClick={closeMenu}>Noodles</li>
        </ul>
      )
    }
    
    return (
      <div className="hover:bg-gray-100 relative" ref={dropdownRef}>
        <button onClick={toggleDropdown} className="pr-5 content-center">
          {category}
          {category !== 'Drinks' && <span
            className={`ml-2 inline-block transition-transform duration-300 ${
              isOpen ? 'rotate-0' : 'rotate-180'
            }`}
          >
            ^
          </span>}
        </button>
        <div
          className={`absolute left-0 mt-2 w-48 bg-white shadow-md rounded transition-all duration-300 overflow-hidden ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {options}
        </div>
    </div>
  );
}

export default Dropdown;