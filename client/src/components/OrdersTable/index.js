import React from "react";
import sampleProduct from "../../assets/images/Mac Book 3.png";
import deleteIcon from "../../assets/images/delete.png";
import backArrow from "../../assets/images/back.png";
import classes from "./OrdersTable.module.scss";
import { Link } from "react-router-dom";

const OrdersTable = () => {
  return (
    <>
      <div className={classes.order}>
        <div className={classes.orderTable}>
          <div className={classes.orderTable__card}>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={classes.product}>
                    <div className={classes.productImage}>
                      <img src={sampleProduct} alt="" />
                    </div>
                    <div className={classes.productDetails}>
                      <p>Macbook pro</p>
                    </div>
                  </td>
                  <td>$35.71</td>
                  <td>2</td>
                  <td>$71.42</td>
                  <td>
                    <div className={classes.deleteItem}>
                      <img src={deleteIcon} alt="delete icon" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className={classes.product}>
                    <div className={classes.productImage}>
                      <img src={sampleProduct} alt="" />
                    </div>
                    <div className={classes.productDetails}>
                      <p>Macbook pro</p>
                    </div>
                  </td>
                  <td>$35.71</td>
                  <td>2</td>
                  <td>$71.42</td>
                  <td>
                    <div className={classes.deleteItem}>
                      <img src={deleteIcon} alt="delete icon" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={classes.orderSummary}></div>
      </div>
      <div className={classes.backButton}>
        <img src={backArrow} alt="back arrow" />
        <Link to="/single-product">Continue Shopping</Link>
      </div>
    </>
  );
};

export default OrdersTable;
