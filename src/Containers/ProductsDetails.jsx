import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProductAction,
  removeSelectedProductAction,
} from "../redux/actions/productActions";

const ProductsDetails = () => {
  const products = useSelector((state) => state.product);
  const size = Object.keys(products).length;
  console.log(size);
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
    return () => {
      dispatch(removeSelectedProductAction());
    };
  }, [productId]);
  const { image, title, price, description } = products;

  return size === 0 ? (
    <div>Loading...</div>
  ) : (
    <div className="product__detail-container">
      <div className="detail__image-wrapper">
        <img src={image} alt="" />
      </div>
      <div className="detail__content">
        <h1>{title}</h1>
        <p>{description}</p>
        <h3>{price}</h3>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductsDetails;
