import React from "react";
import products from './products';
import '../index.css';

// Add your code here
const ProductList = () => {
    return (
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item" role="listitem">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price === 0 ? '$0' : product.price}</p>
          </div>
        ))}
      </div>
    );
};
  
export default ProductList;
