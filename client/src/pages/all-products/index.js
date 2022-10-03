import API from "api";
import ProductSkeleton from "components/ProductSkeleton";
import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import ItemCard from "../../components/ItemCard";
import ResultsCount from "../../components/ResultsCount";
import SelectedFilters from "../../components/SelectedFilters";
import classes from "./allProducts.module.scss";
// import arrowIcon from "../../assets/images/down-arrow.png";

const AllProducts = () => {
  const [filterValues, setFilterValues] = useState({
    category: [
      { name: "phones", value: false },
      { name: "laptops", value: false },
      { name: "watches", value: false },
    ],
    rating: [
      { name: "phones", value: false },
      { name: "laptops", value: false },
      { name: "watches", value: false },
    ],
  });

  const [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    const res = await API.get("/products");
    console.log(res);
    setProducts(res.data.data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  const productsList = products?.map((product) => {
    return <ItemCard product={product} />;
  });

  const skeletonLoaders = [1,2,3,4,5,6,].map(() => {
    return <ProductSkeleton />
  })
  return (
    <div className={classes.allProducts}>
      <div className={classes.wrapper}>
        <aside>
          <Filter filterValues={filterValues} />
        </aside>
        <div>
          <ResultsCount />
          <SelectedFilters />
          <div className={classes.productsGrid}>
          {products.length ? productsList : skeletonLoaders}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
