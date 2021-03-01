import React from "react";
// import { AuthContext } from "../../contexts/AuthContext";
// import { UserContext } from "../../contexts/UserContext";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header() {
  const [auth, setAuth, removeAuth] = useCookies(["isAuthenticated"]);
  const [user, setUser, removeUser] = useCookies(["user"]);
  const [token, setToken, removeToken] = useCookies(["token"]);

  let history = useHistory();

  const currentUser = user["user"];

  const logoutHandle = () => {
    removeToken(["token"]);
    removeUser(["user"]);
    removeAuth(["isAuthenticated"]);
    history.push("/");
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        Recipe Blog
      </Link>
      <div className="nav">
        {auth["isAuthenticated"] ? (
          <Link to="/add-recipe">Add Recipe</Link>
        ) : null}
        {auth["isAuthenticated"] ? null : (
          <Link to="/register" className="register">
            Register
          </Link>
        )}
        {auth["isAuthenticated"] ? (
          <div id={currentUser.id} className="my-profile">
            {`Profile: ${currentUser.username}`}
            <img src={currentUser.image} alt="img" />
          </div>
        ) : (
          <Link to="/login" className="login">
            Login
          </Link>
        )}
        {auth["isAuthenticated"] ? (
          <div onClick={logoutHandle} className="logout">
            Logout
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
