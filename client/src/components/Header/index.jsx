import React, { useState } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/images/BlackLogo.svg";
import CartIcon from "../../assets/images/CartIcon.svg";
import user from "../../assets/images/user.png";
import SearchIcon from "../../assets/images/SearchIcon.svg";
import NavMenuButton from "../../assets/images/NavMenuButton.svg";
import { Link, NavLink } from "react-router-dom";
import Cart from "../Cart";
import { useSelector } from "react-redux";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const quantity = useSelector(state => state.cart.quantity);  
  
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="shop"> SHOP</NavLink>
            </li>
            {/* <li onClick={() => setShowDropDown((prevState) => !prevState)}>
              SOLUTIONS <img src={downArrow} alt="down arrow" />
              {showDropDown && <MegaDropDown />}
            </li> */}
            <li>
              <NavLink to="shop"> MENS </NavLink>
            </li>
            <li>
              <NavLink to="shop"> WOMEN </NavLink>
            </li>
            <li>
              <NavLink to="shop"> KIDS </NavLink>
            </li>
          </ul>
        </nav>
        <div className={classes.navIcons}>
          <div className={classes.cartIconWrapper}>
            <img
              src={CartIcon}
              alt="cart icon"
              
              onClick={() => setShowCart(!showCart)}
            />
            {quantity > 0 && <div className={classes.cartCount}>{quantity}</div>}
          </div>
          <Link to="login">
            <img src={user} alt="user icon" />
          </Link>

          <img
            src={NavMenuButton}
            className={classes.hamburgerIcon}
            alt="hambuger icon"
          />
        </div>
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
    </header>
  );
};

export default Header;
