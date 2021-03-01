import { baseInstance } from "../../axios";
import React, { useState } from "react";
import "./Register.scss";
import { useHistory } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  let history = useHistory();

  const registerButton = () => {
    baseInstance
      .post("account/register", {
        username,
        email,
        password,
        password2,
      })
      .then((res) => {
        console.log(res.data);
        history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-form">
      <h1>Register</h1>
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
          type="text"
          id="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <input
          type="password"
          id="password2"
          placeholder="Confirm Password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        <button onClick={registerButton}>Register</button>
      </div>
    </div>
  );
}

export default Register;
