import React from "react";
import classes from "./MegaDropDown.module.scss";
import phoneIcon from "../../assets/images/Phone Icon.svg";
import { Link } from "react-router-dom";

const MegaDropDown = () => {
  return (
    <div className={classes.megaDropDown}>
      <div className={classes.container}>
        <div className={classes.categoriesWrapper}>
          <Link to="/">
            <div className={classes.categoryHolder}>
              <div className={classes.categoryImageHolder}>
                <svg
                  width="21"
                  height="30"
                  viewBox="0 0 21 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2857 1H3.71429C2.21523 1 1 2.21523 1 3.71429V25.4286C1 26.9276 2.21523 28.1429 3.71429 28.1429H17.2857C18.7848 28.1429 20 26.9276 20 25.4286V3.71429C20 2.21523 18.7848 1 17.2857 1Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 22.7144H10.5136"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className={classes.categoryHolder}>
              <div className={classes.categoryImageHolder}>
                <svg
                  width="21"
                  height="30"
                  viewBox="0 0 21 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2857 1H3.71429C2.21523 1 1 2.21523 1 3.71429V25.4286C1 26.9276 2.21523 28.1429 3.71429 28.1429H17.2857C18.7848 28.1429 20 26.9276 20 25.4286V3.71429C20 2.21523 18.7848 1 17.2857 1Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 22.7144H10.5136"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className={classes.categoryHolder}>
              <div className={classes.categoryImageHolder}>
                <svg
                  width="21"
                  height="30"
                  viewBox="0 0 21 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2857 1H3.71429C2.21523 1 1 2.21523 1 3.71429V25.4286C1 26.9276 2.21523 28.1429 3.71429 28.1429H17.2857C18.7848 28.1429 20 26.9276 20 25.4286V3.71429C20 2.21523 18.7848 1 17.2857 1Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 22.7144H10.5136"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className={classes.categoryContentHolder}>
                <div className={classes.title}>Phones</div>
                <div className={classes.title}>Your Day To Day Life</div>
              </div>
            </div>
          </Link>
          <Link to="/">
            <div className={classes.categoryHolder}>
              <div className={classes.categoryImageHolder}>
                <svg
                  width="21"
                  height="30"
                  viewBox="0 0 21 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.2857 1H3.71429C2.21523 1 1 2.21523 1 3.71429V25.4286C1 26.9276 2.21523 28.1429 3.71429 28.1429H17.2857C18.7848 28.1429 20 26.9276 20 25.4286V3.71429C20 2.21523 18.7848 1 17.2857 1Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.5 22.7144H10.5136"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <h1>2</h1>
        </div>
      </div>
    </div>
  );
};

export default MegaDropDown;
