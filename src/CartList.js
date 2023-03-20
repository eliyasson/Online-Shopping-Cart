import React, {useEffect} from 'react';

function CartList({cart, handleRemoveClick}) {
    return ( 
        <div className="cart-container">
            {cart.length > 0 && <h4 className="cart-heading">My Shopping Cart</h4>} {/* conditional rendering*/}
            <ul className="cart-list">
                {cart.map((product) => ( 
                    <li key={product.id} className="cart-item">
                    <span className="cart-name">{product.name}</span>
                    <span className="cart-price">{product.price}€</span>
                    <button className="remove-button" onClick={() => handleRemoveClick(product.id)}>Remove</button>
                    </li>
                ))}
            </ul>
      </div>
     );
}
 
export default CartList;