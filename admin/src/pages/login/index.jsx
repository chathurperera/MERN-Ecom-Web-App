import React from "react";
import classes from "./login.module.scss";

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.loginHolder}>
        <h3>Welcome back</h3>
        <div className={classes.inputHolder}>
          <label>Email</label>
          <input type="text" placeholder="enter your email" />
        </div>
        <div className={classes.inputHolder}>
          <label>Password</label>
          <input type="password" placeholder="enter your password" />
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
