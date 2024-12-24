import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ price, productName }) {
  return (
    <div className="product-item">
      <img src="images/product.jpg" alt={productName} />
      <h3>{productName}</h3>
      <h6>
        <span className="price">{price.toLocaleString()} VND</span>
      </h6>
      <Link to={`/thanhtoan/${price}`}>Mua</Link>
    </div>
  );
}

export default ProductItem;
