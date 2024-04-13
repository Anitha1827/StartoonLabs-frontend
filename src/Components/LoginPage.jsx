import React, { useState } from "react";
import loginimg from "../logo pheezee 03@2x tr.png";
import "./LoginPage.css";
import { login } from "../service.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let data = { email, password };
    let token = await login({ data });
    if (token) {
      localStorage.setItem("token", token);
      navigate("/home");
    }
  };
  return (
    <div className="loginpage">
      <div>
        <img alt="login" className="logoimg" src={loginimg} />
      </div>
      <div>
        <h3>Login Page</h3>
        <form>
          <input
            type="text"
            placeholder="Email"
            className="input"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="signupbtn"
            >
              Sign Up
            </button>
            <button onClick={handleLogin} className="signinbtn">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
