import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/images/BlackLogo.svg";
import CartIcon from "../../assets/images/CartIcon.svg";
import SearchIcon from "../../assets/images/SearchIcon.svg";
import NavMenuButton from "../../assets/images/NavMenuButton.svg";
import downArrow from "../../assets/images/downArrow.svg";
import { Link } from "react-router-dom";
import MegaDropDown from "../MegaDropDown";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>ALL PRODUCTS</li>
            <li>
              SOLUTIONS <img src={downArrow} alt="down arrow" />
            </li>
            <li>ABOUT</li>
            <li>SUPPORT</li>
          </ul>
        </nav>
        <div className={classes.navIcons}>
          <img src={SearchIcon} alt="Search Icon" />
          <img src={CartIcon} alt="cart icon" />
          <img
            src={NavMenuButton}
            className={classes.hamburgerIcon}
            alt="hambuger icon"
          />
        </div>
        <MegaDropDown />
      </div>
    </header>
  );
};

export default Header;
