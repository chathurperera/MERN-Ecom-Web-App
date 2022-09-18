import React, { useState } from "react";
import classes from "../Login/Login.module.scss";
import signUpImage from "../../assets/images/Sign Up Image (2).png";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner";
import showIcon from "../../assets/images/login/show.png";
import hideIcon from "../../assets/images/login/hide.png";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userInputs, setUserInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
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
          <h4>Sign Up</h4>
          <p className={classes.signupDescription}>
            Sign up and you’ll be able to manage your account, track orders,
            save products and access easier returns
          </p>
          <form action="">
            <div className={classes.inputGroup}>
              <div className={classes.inputHolder}>
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  id=""
                />
              </div>
              <div className={classes.inputHolder}>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" onChange={handleChange} />
              </div>
            </div>
            <div className={classes.inputHolder}>
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" onChange={handleChange} id="" />
            </div>
            <div className={classes.inputHolder}>
              <label htmlFor="password">Password*</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                id=""
              />
              <img
                src={showPassword ? hideIcon : showIcon}
                onClick={() => setShowPassword((prevState) => !prevState)}
                alt="password reveal icon"
              />
            </div>
            <button>{loading ? <Spinner /> : "Sign up"}</button>
          </form>
          <p className={classes.newAccount}>
            Already have an account ? <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
