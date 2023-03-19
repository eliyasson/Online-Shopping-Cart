import React, { useState, useEffect, } from 'react';

function ShowDetail({showDetails, handleAddToCart, handleCloseClick}) {
    return ( 
        <div>
            {showDetails && (
            <div className="detail-container">
                <h4 className="detail-heading">Product Details</h4>
                <p className="detail-name">{showDetails.name}</p>
                <p className="detail-price">{showDetails.price}€</p>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(showDetails)}>Add to Cart</button>
                <button className="close-button" onClick={handleCloseClick}>Close</button>
            </div>
            )} 
        </div>
     );
}
 
export default ShowDetail;