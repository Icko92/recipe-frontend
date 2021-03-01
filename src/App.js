import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

//Components
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import RecipeForm from "./components/recipe-form/RecipeForm";
//Cookie Provider
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <Router>
      <CookiesProvider>
        <div className="app">
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/add-recipe" exact component={RecipeForm} />
          </Switch>
        </div>
      </CookiesProvider>
    </Router>
  );
}

export default App;
