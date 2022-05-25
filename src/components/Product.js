import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="produt-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img alt={title} src={image} />
      <button onClick={addToBasket}>Add to basket </button>
    </div>
  );
}
export default Product;
