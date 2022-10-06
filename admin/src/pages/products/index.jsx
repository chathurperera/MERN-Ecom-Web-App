import React from "react";
import classes from "./products.module.scss";
import addIcon from "assets/images/add.png";

const Products = () => {
  const headings = ["Name", "Created At", "Quantity", "Price"];
  return (
    <div className={classes.products}>
      <div className={classes.head}>
        <h3>Products List</h3>
        <button>
          <img src={addIcon} alt="add icon" /> Add Product
        </button>
      </div>
      <div className={classes.tableCard}>
        <table className={classes.productsTable}>
          <thead>
            <tr>
              {headings.map((heading) => (
                <th>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={classes.name}>
                <div className={classes.productImage}>
                  <img
                    src="https://minimal-assets-api.vercel.app/assets/images/products/product_24.jpg"
                    alt="product"
                  />
                </div>
                <div className={classes.productName}>
                  Run Star Hike Platform Sneaker
                </div>
              </td>
              <td>12 September 2022</td>
              <td>20</td>
              <td>$50.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
