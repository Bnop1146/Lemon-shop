import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

import './styles.css'


function Shop  ()  {
  const [drinks, setDrinks] = useState([]);
  const dispatch = useDispatch();

  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon');
      const jsonData = await response.json();
      setDrinks(jsonData.drinks);
    };
    fetchData();
  }, []);

  const handleAddToCart = (drink) =>{
    dispatch(addToCart(drink))
  };

  

  return (
    <div className="flex flex-wrap justify-center mx-auto px-32 xxl:px-96 py-2.5">
      {drinks.map((drink) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-6" key={drink.idDrink}>
          <div className="bg-primary-secondary p-4 rounded-lg shadow-md h-auto">
            <div className="mb-2">
              <h2 className=" text-3xl font-bold">{drink.strDrink}</h2>
            </div>
            <div className="mb-4">
              <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-96 object-cover" />
            </div>
            
            <div className="mb-2">
              <h3 className="text-2xl font-bold mb-1 underline">Ingredients.</h3>
              <ul className="font-bold">
                <li>{drink.strIngredient1}</li>
                <li>{drink.strIngredient2}</li>
                <li>{drink.strIngredient3}</li>
                <li>{drink.strIngredient4}</li>
                <li>{drink.strIngredient5}</li>
              </ul>
            </div>

            <div className="flex justify-between items-center mt-10">
              <p className="text-lg font-bold"> {parseFloat(drink.idDrink.substring(0, 2))} $ usd </p>
              <button className="bg-primary-secondary outline text-white font-bold py-2 px-4 rounded hover:bg-primary-darktext hover:outline-none" 
              onClick= {() => handleAddToCart(drink)} >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;