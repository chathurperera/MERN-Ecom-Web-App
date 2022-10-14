import React, { useState } from "react";
import classes from "./OrderSummary.module.scss";
import { Link } from "react-router-dom";
import API from "api";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "components/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearCart } from "features/cartSlice";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ setCheckoutStep, checkoutStep, cart, order }) => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const payload = {
    products: cart.products,
    userId: user.currentUser.user.userId,
  };

  const createCart = async () => {
    console.log("ran");
    setLoading(true);
    let cartId;
    await API.post("/cart", payload)
      .then((res) => {
        console.log(res);
        cartId = res.data.savedCart._id;
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });

    return cartId;
  };

  const submitOrder = async () => {
    if (!order.paymentOption) {
      toast.error("Please select a payment method");
      return;
    }

    const cartId = await createCart();
    const orderInfo = {
      userId: user.currentUser.user.userId,
      cartId: cartId,
      total: cart.total,
    };

    await API.post("/order", orderInfo)
      .then((res) => {
        setLoading(false);
        console.log(res);
        navigate(`/order-success/${res.data.savedOrder._id}`);
        dispatch(clearCart());
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className={classes.orderSummary}>
      <div className={classes.card}>
        <div className={classes.cardHeader}>Order Summary</div>
        <div className={classes.detail}>
          <span className={classes.label}>Sub Total</span>
          <span className={classes.value}>${cart?.total}</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.label}>Discount</span>
          <span className={classes.value}>-</span>
        </div>
        <div className={classes.detail}>
          <span className={classes.label}>Shipping</span>
          <span className={classes.value}>Free</span>
        </div>
        <div className={classes.divider}></div>
        <div className={classes.total}>
          <span>Total</span>
          <span>${cart?.total}</span>
        </div>
      </div>
      {checkoutStep === 1 && (
        <button
          className={classes.checkoutButton}
          onClick={() => setCheckoutStep(2)}
        >
          {loading ? <Spinner /> : "Check Out"}
        </button>
      )}
      {checkoutStep === 3 && (
        <button className={classes.checkoutButton} onClick={submitOrder}>
          {loading ? <Spinner /> : "Create Order"}
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default OrderSummary;
