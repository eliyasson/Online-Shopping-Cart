import React, { useState, useEffect, } from 'react';

function ProductList ({productsList, handleDetailsClick})  {
    return ( 
        <div>
            <ul  className="product-list">
             {productsList.map((product) => (
                <li key={product.id} className="product-item">
                    <span className="product-name">{product.name}</span>
                    <button className="detail-button" onClick={() => handleDetailsClick(product)}>Details</button>
                </li>
              ))}
            </ul>
        </div>
     );
}
 
export default ProductList;