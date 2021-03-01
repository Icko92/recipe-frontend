import React, { useState } from "react";
import { tokenInstance } from "../../axios";
import { useHistory } from "react-router-dom";

import "./RecipeForm.scss";

function RecipeForm() {
  const [file, setFile] = useState();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();

  const fileSelectedHandler = (event) => {
    setFile(event.target.files[0].name);
  };

  const fileUploadHandler = (event) => {
    tokenInstance
      .post("recipe/create", { title, content, file })
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="recipe-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Recipe Content"
      ></textarea>
      <input type="file" onChange={(event) => fileSelectedHandler(event)} />
      <button onClick={(event) => fileUploadHandler(event)}>Create</button>
    </div>
  );
}

export default RecipeForm;
