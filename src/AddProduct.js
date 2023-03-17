import React, { useState, useEffect, } from 'react';

const AddProduct = ({product, price, handleProductChange, handlePriceChange, handleAddProduct}) => {
    return ( 
        <div>
            <h3 className="heading">Add Product</h3>
            <div className="form-container">
                <input type="text" value={product} placeholder='Product Name' onChange={handleProductChange}/><br />
                <input type="number" value={price} placeholder='Price' onChange={handlePriceChange}/><br />
                <button className="add-button" onClick={handleAddProduct}>Add Product</button>
            </div>
        </div>
    );
}
 
export default AddProduct;