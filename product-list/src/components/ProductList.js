import React from "react";
import products from './products';

// Add your code here
const ProductList = () => {
    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
};
  
export default ProductList;
