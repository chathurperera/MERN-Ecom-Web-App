import React from "react";
import classes from "./Login.module.scss";
import sliderImage1 from "../../assets/images/sliderImage1.png";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <main className={classes.login}>
      <div className={classes.loginBanner}>
        <div className={classes.content}>
          <p>iPhone 13 Pro</p>
          <h1>Oh. So. Pro.</h1>
        </div>
        <img src={sliderImage1} alt="phones" />
      </div>
      <div className={classes.loginWrapper}>
        <h5>Login</h5>
        <form action="">
          <div className={classes.inputHolder}>
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div className={classes.inputHolder}>
            <label htmlFor="password">Password</label>
            <input type="password" name="" id="" />
          </div>
          <button>Log in</button>
        </form>
        <p className={classes.newAccount}>
          New to California ? <Link to="/">Create an Account</Link>{" "}
        </p>
      </div>
    </main>
  );
};

export default Login;
