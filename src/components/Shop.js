import React, { useState, useEffect } from "react";
import './styles.css'


const Shop = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks));
  }, []);

  const price = parseFloat(localStorage.getItem("drinkPrice")) || (Math.floor(Math.random() * 10) + 5);

  useEffect(() => {
    localStorage.setItem("drinkPrice", price);
  }, [price]);

  return (
    <div className="flex flex-wrap justify-center mx-auto px-96 py-2.5">
      {drinks.map((drink, index) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-6" key={index}>
          <div className="bg-white p-4 rounded-lg shadow-md h-full">
            <div className="mb-4">
              <img src={drink.strDrinkThumb} alt={drink.strDrink} className="w-full h-96 object-cover" />
            </div>
            <div className="mb-2">
              <h2 className=" text-3xl font-bold">{drink.strDrink}</h2>
            </div>
            <div className="mb-2">
              <h3 className="text-xl font-bold">Ingredients</h3>
              <ul className="font-medium">
                <li>{drink.strIngredient1}</li>
                <li>{drink.strIngredient2}</li>
                <li>{drink.strIngredient3}</li>
                <li>{drink.strIngredient4}</li>
                <li>{drink.strIngredient5}</li>
              </ul>
            </div>
            <div>
              <p className="text-lg font-bold">${price.toFixed(2)}</p>
              <button className="bg-primary-secondary text-white font-bold py-2 px-4 rounded mt-4 hover:bg-primary-darktext">
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