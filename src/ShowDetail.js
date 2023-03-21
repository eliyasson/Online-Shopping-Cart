

function ShowDetail({detailProduct, handleAddToCart, handleCloseClick}) {
    return ( 
        <div>
            {detailProduct && (
            <div className="detail-container">
                <h4 className="detail-heading">Product Details</h4>
                <p className="detail-name">{detailProduct.name}</p>
                <p className="detail-price">{detailProduct.price}€</p>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(detailProduct)}>Add to Cart</button>
                <button className="close-button" onClick={handleCloseClick}>Close</button>
            </div>
            )} 
        </div>
     );
}
 
export default ShowDetail;