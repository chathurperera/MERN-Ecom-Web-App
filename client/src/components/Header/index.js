import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/images/BlackLogo.svg";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav></nav>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
