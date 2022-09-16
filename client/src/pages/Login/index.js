import React, { useState } from "react";
import classes from "./Login.module.scss";
import signUpImage from "../../assets/images/Sign Up Image (2).png";
import showIcon from "../../assets/images/login/show.png";
import hideIcon from "../../assets/images/login/hide.png";
import Spinner from "../../components/Spinner";
import { login } from "../../api";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailInput, setEmailInput] = useState("chathura@gmail.com");
  const [passwordInput, setPasswordInput] = useState("12345678");
  const navigate = useNavigate();
  const submit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    if (!emailInput || !passwordInput) {
      return;
    }
    setLoading(true);
    const credentials = {
      email: emailInput,
      password: passwordInput,
    };
    console.log("credentials", credentials);
    await login(credentials)
      .then((res) => {
        setLoading(false);
        console.log(res);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
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
              <input
                type="email"
                required
                name=""
                id=""
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className={classes.inputHolder}>
              <label htmlFor="password">Password</label>
              <input
                required
                type={showPassword ? "text" : "password"}
                name=""
                id=""
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
              />
              <img
                src={showPassword ? hideIcon : showIcon}
                onClick={() => setShowPassword((prevState) => !prevState)}
                alt="password reveal icon"
              />
            </div>
            <button type="submit" onClick={(e) => submit(e)}>
              {loading ? <Spinner /> : "Login"}
            </button>
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
