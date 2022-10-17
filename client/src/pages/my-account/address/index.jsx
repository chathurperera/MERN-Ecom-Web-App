import React, { useState } from "react";
import classes from "./address.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "components/Spinner";
import API from "api";
import { useSelector } from "react-redux";

const MyAddress = () => {
  const user = useSelector((state) => state.user);
  const [addressInfo, setAddressInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setAddressInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noEmptyFields = Object.values(addressInfo).every(
      (value) => value !== ""
    );

    if (!noEmptyFields) {
      toast.error("Please fill all required fields");
      return;
    }

    setIsSubmitting(true);

    await API.post("/address", {
      ...addressInfo,
      userId: user.currentUser.user.userId,
    })
      .then((res) => {
        console.log(res);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        setIsSubmitting(false);
      });
  };

  return (
    <div className={classes.myAddress}>
      <div className={classes.addressCardWrapper}>
        <div className={classes.addressCard}>
          <h6 className={classes.name}>
            Jayvion Simon 
          </h6>{" "}
          <address>
            <p>B 35 2/2 Soyspura housing Scheme Moratuwa </p>
            <p>Moratuwa</p>
            <p>Western Province</p>
            <p>10400</p>
          </address>
          <button>Remove</button>
        </div>
      </div>
      <form className={classes.wrapper} onSubmit={handleSubmit}>
        <div className={classes.twoCol}>
          <div className={classes.inputGroup}>
            <label htmlFor="">Name</label>
            <input
              type="text"
              id=""
              name="name"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={classes.inputGroup}>
          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            id=""
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes.twoCol}>
          <div className={classes.inputGroup}>
            <label htmlFor="">City</label>
            <input type="text" name="city" onChange={handleChange} required />
          </div>
          <div className={classes.inputGroup}>
            <label htmlFor="">State</label>
            <input type="text" name="state" onChange={handleChange} required />
          </div>
        </div>
        <div className={classes.twoCol}>
          <div className={classes.inputGroup}>
            <label htmlFor="">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              onChange={handleChange}
              required
            />
          </div>
          <div></div>
        </div>
        <button className={classes.saveBtn}>
          {isSubmitting ? <Spinner color="blue" /> : "Add Address"}{" "}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default MyAddress;
