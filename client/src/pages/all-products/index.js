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
  const [filters, setFilters] = useState({
    rating: "",
    price: "",
    availability: false,
  });
  const [isProductsLoading, setIsProductsLoading] = useState(false);

  const [categories, setCategories] = useState({
    shorts: false,
    tanks: false,
    shoes: false,
  });

  const [products, setProducts] = useState([]);

  const categoryQueryParams = Object.keys(categories)
    .filter((value) => !!categories[value])
    .join();

  const queryParams = {
    category: categoryQueryParams,
    rating: "",
    minPrice: "",
    maxPrice: "",
    availability: true,
  };

  //Setting up the price query
  if (filters.price) {
    const priceRange = filters.price?.split("-");
    queryParams.minPrice = priceRange[0] && priceRange[0];
    queryParams.maxPrice = priceRange[1] && priceRange[1];
  }

  const getAllProduct = async () => {
    setIsProductsLoading(true);
    await API.get("/products", { params: queryParams })
      .then((res) => {
        setIsProductsLoading(false);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProduct();
  }, [filters, categories]);

  const productsList = products?.map((product) => {
    return <ItemCard product={product} key={product._id} />;
  });

  const skeletonLoaders = [1, 2, 3, 4, 5, 6].map((number) => {
    return <ProductSkeleton key={number} />;
  });

  return (
    <div className={classes.allProducts}>
      <div className={classes.wrapper}>
        <aside>
          <Filter
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            setCategories={setCategories}
          />
        </aside>
        <div>
          <ResultsCount />
          {/* <SelectedFilters
            filters={filters}
            setFilters={setFilters}
            categories={categories}
            setCategories={setCategories}
          /> */}
          <div className={classes.productsGrid}>
            {!isProductsLoading ? productsList : skeletonLoaders}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
