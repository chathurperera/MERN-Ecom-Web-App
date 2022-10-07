import React, { useState } from "react";
import classes from "./login.module.scss";

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const submitDetails = async(e) => {
    e.preventDefault();
    if (!userInput.email || !userInput.password) {
      return;
    }
    setLoading(true);
    console.log('submitted');
    await 
  };
  return (
    <div className={classes.login}>
      <form className={classes.loginHolder} onSubmit={submitDetails}>
        <h3>Welcome back</h3>
        <div className={classes.inputHolder}>
          <label>Email</label>
          <input
            type="text"
            onChange={handleChange}
            name="email"
            required
            value={userInput.email}
            placeholder="enter your email"
          />
        </div>
        <div className={classes.inputHolder}>
          <label>Password</label>
          <input
            value={userInput.password}
            type="password"
            name="password"
            onChange={handleChange}
            required
            placeholder="enter your password"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
