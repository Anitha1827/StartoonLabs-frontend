import React, { useState } from "react";
import loginimg from "../logo pheezee 03@2x tr.png";
import "./SignUp.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { signup } from "../service";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    let data = { email, password, gender, name };
    let token = await signup({ data });

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
        <h3>SignUp Page</h3>
        <form>
          <input
            placeholder="Name"
            type="text"
            className="input"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email"
            type="text"
            className="input"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            className="input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="gender">
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              name="radio-buttons-group"
              row
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </div>

          <div>
            <button onClick={handleSignUp} className="signupbtn">Sign Up</button>
            <button className="signinbtn"
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;
