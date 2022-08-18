import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsComponent from "./ProductsConponent";
import axios from "axios";
import { setProductAction } from "../redux/actions/productActions";
const ProductsLists = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    dispatch(setProductAction(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductsComponent />
    </div>
  );
};

export default ProductsLists;
