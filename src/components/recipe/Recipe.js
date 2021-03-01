import React from "react";
import "./Recipe.scss";

function Recipe(props) {
  return (
    <div className="recipe">
      <h1> {props.title} </h1>
      <img src={props.img} alt="img" />
      <div className="content">{props.content}</div>
      <div className="category">
        Category:
        {props.categories.map((category) => {
          return " " + category.name + ", ";
        })}
      </div>
      <div className="author">Author: {props.username}</div>
      <div className="date-created">
        Date Created: {props.createdAt.split("T")[0]}
      </div>
    </div>
  );
}

export default Recipe;
