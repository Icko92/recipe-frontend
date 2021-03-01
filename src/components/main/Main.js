import React, { useState, useEffect } from "react";
import "./Main.scss";
import { baseInstance } from "../../axios";

import Recipe from "../recipe/Recipe";

function Main() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");
  const [url, setUrl] = useState("recipe");

  //Get Recepies
  useEffect(() => {
    baseInstance
      .get(url)
      .then((res) => {
        setRecipes(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [url]);

  //Get Categories

  useEffect(() => {
    baseInstance
      .get("recipe/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setUrl("recipe/?search=" + search);
    setSearch("");
  };

  const handleCategory = (event) => {
    setUrl("recipe/?search=" + event.target.id);
    setSearch("");
  };
  const handleOrdering = (event) => {
    setUrl("recipe/?" + event.target.id);
    setSearch("");
  };

  return (
    <div className="main-content">
      <div className="recipe-content">
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              title={recipe.title}
              username={recipe.username}
              content={recipe.content}
              img={recipe.image}
              createdAt={recipe.created_at}
              categories={recipe.categories}
            />
          );
        })}
      </div>
      <div className="options">
        <input
          value={search}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={(event) => handleSearch(event)}>Search</button>
        <div className="category-display">
          <p>Pick Category:</p>
          {categories.map((category) => {
            return (
              <span
                onClick={(e) => {
                  setSearch(e.target.id);
                  handleCategory(e);
                }}
                id={category.name}
                key={category.id}
              >
                {category.name}
              </span>
            );
          })}
        </div>
        <div className="time-filter">
          <div
            onClick={(e) => {
              setSearch(e.target.id);
              handleOrdering(e);
            }}
            id="ordering=-created_at"
          >
            Order by: Newest
          </div>
          <div
            onClick={(e) => {
              setSearch(e.target.id);
              handleOrdering(e);
            }}
            id="ordering=+created_at"
          >
            Order by: Oldest
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
