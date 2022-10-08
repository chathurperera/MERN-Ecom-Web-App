import React, { useEffect, useState } from "react";
import classes from "./products.module.scss";
import addIcon from "assets/images/add.png";
import deleteIcon from "assets/images/delete.png";
import editIcon from "assets/images/edit.png";
import moment from 'moment'
import API from "api";

const Products = () => {
  const [products, setProducts] = useState([]);
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
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    await API.get("/products").then((res) => {
      console.log(res);
      setProducts(res.data.data); 
    });
  };
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products?.map((item,index) => {
              return (
                <tr key={index}>
                  <td className={classes.name}>
                    <div className={classes.productImage}>
                      <img src={item.imageUrl} alt="product" />
                    </div>
                    <div className={classes.productName}>{item.name}</div>
                  </td>
                  <td>{ moment(item.createdAt).format('LL')}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>
                    <div className={classes.actionButtons}>
                      <img src={deleteIcon} alt="delete item" />
                      <img src={editIcon} alt="edit item" />
                    </div>
                  </td>
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
