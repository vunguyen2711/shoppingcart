import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductsComponent = () => {
  const products = useSelector((state) => state.allProduct.products);
  console.log(products);
  const { title, category, image, price } = products;
  return (
    <div className="product__container">
      {products.map((product, index) => {
        return (
          <Link to={`/product/${product.id} `}>
            <div key={product.id} className="product__item">
              <div className="image__container">
                <img src={product.image} alt="" className="product__img" />
              </div>
              <h2 className="product__title">{product.title}</h2>
              <p>{product.category}</p>
              <h3>${product.price}</h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsComponent;
