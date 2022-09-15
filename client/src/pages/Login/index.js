import React, { useState } from "react";
import classes from "./Login.module.scss";
import signUpImage from "../../assets/images/Sign Up Image (2).png";
import showIcon from "../../assets/images/login/show.png";
import hideIcon from "../../assets/images/login/hide.png";
import Spinner from "../../components/Spinner";

import { Link } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <main className={classes.login}>
      <div className={classes.loginLeft}>
        <div className={classes.loginLeftHolder}>
          <div className={classes.content}>
            <p>We bring you the latest and greatest</p>
            <h1>Except the best</h1>
          </div>
          <img src={signUpImage} alt="phones" />
        </div>
      </div>
      <div className={classes.loginRight}>
        <div className={classes.loginWrapper}>
          <h4>Login</h4>
          <form action="">
            <div className={classes.inputHolder}>
              <label htmlFor="email">Email</label>
              <input type="email" name="" id="" />
            </div>
            <div className={classes.inputHolder}>
              <label htmlFor="password">Password</label>
              <input type={showPassword ? "text" : "password"} name="" id="" />
              <img
                src={showPassword ?   hideIcon : showIcon}
                onClick={() => setShowPassword((prevState) => !prevState)}
                alt="password reveal icon"
              />
            </div>
            <button>{loading ? <Spinner /> : "Login"}</button>

          </form>
          <p className={classes.newAccount}>
            New to California ? <Link to="/">Create an Account</Link>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
