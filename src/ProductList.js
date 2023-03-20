import React, { useState, useEffect, } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ProductList ({productsList, handleDeleteProduct, handleDetailsClick})  {
    return ( 
        <div>
            <ul  className="product-list">
             {productsList.map((product) => (
                <li key={product.id} className="product-item">
                    <span className="product-name">{product.name}</span>
                    <div className="button-container">
                        <button className="delete-button" onClick={() => handleDeleteProduct(product.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        </button>

                        <button className="detail-button" onClick={() => handleDetailsClick(product)}>Details</button>
                    </div>
                    
                </li>
              ))}
            </ul>
        </div>
     );
}
 
export default ProductList;