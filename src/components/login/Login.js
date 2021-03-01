import { baseInstance } from "../../axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

import "./Login.scss";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useCookies(["token"]);
  const [user, setUser] = useCookies(["user"]);
  const [auth, setAuth] = useCookies(["isAuthenticated"]);
  let history = useHistory();

  const loginButton = () => {
    baseInstance
      .post("account/login", {
        username,
        password,
      })
      .then((res) => {
        setToken("token", res.data.token);
        return baseInstance.get(`account/${res.data.id}`);
      })
      .then((res) => {
        setUser("user", res.data);
        setAuth("isAuthenticated", true);
      })
      .then(history.push("/"))
      .catch((err) => history.push("login"));
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button onClick={loginButton}>Login</button>
      </div>
    </div>
  );
}

export default Login;
