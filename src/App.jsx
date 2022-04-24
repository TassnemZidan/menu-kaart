import React, { useEffect, useState } from "react";
import Recipe from "./Recipes";
import "./App.css";
import About from './About';
import Contact from './Contact';
import { Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar";


const App = () => {
  const APP_ID = "0d955890";
  const APP_KEY = "e44c368e47914588937958af222ac99f";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="sumbit">
          search
        </button>
        <div className="Index">
        <Navbar />
        <Routes>
  
          <Route exact path='/About' element={About}>
           
          </Route>
          <Route exact path='/Contact' element={Contact}>
          
          </Route>
        </Routes>
      </div>

      </form>
      <div className="recipe">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
};
export default App;
