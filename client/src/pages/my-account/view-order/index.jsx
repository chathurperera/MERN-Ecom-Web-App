import React from "react";
import classes from "./view-order.module.scss";

const viewOrder = () => {
  return (
    <div className={classes.viewOrder}>
      <div className={classes.wrapper}>
        <p className={classes.status}>
          Order #<span>568908</span> was placed on <span>August 29, 2022</span>{" "}
          and is currently <span>Completed</span> .
        </p>
        <h3>Order Details</h3>
        <div className={classes.orderDetails}>
          <div className={classes.detailRow}>
            <div className={classes.label}>Product</div>
            <div className={classes.label}>Total</div>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.value}>
              Royal Lotus - Body Spray 200ml × 1
            </div>
            <div className={classes.value}>LKR 3,750.00</div>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.label}>Subtotal:</div>
            <div className={classes.label}>LKR 3,750.00</div>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.label}>Shipping:</div>
            <div className={classes.label}>Free</div>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.label}>Payment method:</div>
            <div className={classes.label}>Cash</div>
          </div>
          <div className={classes.detailRow}>
            <div className={classes.label}>Total:</div>
            <div className={classes.label}>LKR 4,2800</div>
          </div>
        </div>
        <div className={classes.shippingAddress}>
          <h3>Shipping Address</h3>
          <div className={classes.addressHolder}>
            <address>
              B 35 2/2 soysapura housing scheme moratuwa srilanka soysapura
              housing scheme moratuwa srilanka Moratuwa CMB SUB 1040
            </address>
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewOrder;
