import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProductAction } from "../redux/actions/productActions";
const ProductsDetails = () => {
  const products = useSelector((state) => state.product);
  console.log(products);
  const dispatch = useDispatch();
  const { productId } = useParams();
  console.log(productId);
  const fetchSingleProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProductAction(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchSingleProducts();
  }, [productId]);
  return (
    <div>
      <h1>ProductsDetails</h1>
    </div>
  );
};

export default ProductsDetails;
