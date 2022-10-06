import React from "react";
import classes from "./products.module.scss";
import addIcon from "assets/images/add.png";

const Products = () => {
  const headings = ["Name", "Created At", "Quantity", "Price"];
  const items = [
    {
      imageUrl:
        "https://minimal-assets-api.vercel.app/assets/images/products/product_23.jpg",
      name: "Chuck Taylor All Star Lift Sneaker",
      createdAt: "14 September 2022",
      quantity: 20,
      price: "300,",
    },
    {
      imageUrl:
        "https://minimal-assets-api.vercel.app/assets/images/products/product_22.jpg",
      name: "Superturf Adventure X Atmos",
      createdAt: "14 September 2022",
      quantity: 20,
      price: "300,",
    },
  ];
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
            {items.map((item) => {
              return (
                <tr>
                  <td className={classes.name}>
                    <div className={classes.productImage}>
                      <img
                        src={item.imageUrl}
                        alt="product"
                      />
                    </div>
                    <div className={classes.productName}>
                      {item.name}
                    </div>
                  </td>
                  <td>{item.createdAt}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
