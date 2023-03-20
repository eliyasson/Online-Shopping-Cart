import React, {useEffect} from 'react';

function AddProduct(handleAddProduct) {
    const [product, setProduct] = useState("");
    const [price, setPrice] = useState("");

    const handleProductChange = (e) => {
        setProduct(e.target.value);
      }
    
      const handlePriceChange = (e) => {
        setPrice(e.target.value);
      }

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