import React, { useState } from 'react'; //These lines import the necessary modules
import './App.css';

function App() { //This declares a functional component named App.

  //state variables using the useState hook:
  const [product, setProduct] = useState(""); //product: stores the current value of the input field for the product name.
  const [productsList, setProductsList] = useState([]); //store the list of products as an array

  const [price, setPrice] = useState("");
  const [priceList, setPriceList] = useState([]);
  
  const [showDetails, setShowDetails] = useState();
  const [cart, setCart] = useState([]);

  //Create a function to handle the button click event that will add the new product to the list:
  /*This function is called when the "Add Product" button is clicked. 
  It updates the productsList state variable by adding the current value of product to the end of the array.*/
  const handleAddProduct = () =>{
    if(!product || !price) {
      alert('Please enter both item and price.');
      return;
    }

    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      name: product,
      price: price
    };

    //add the current newproduct and price values to the productList and priceList arrays
    setProductsList([...productsList, newProduct]);
    setPriceList([...priceList, price]);
    setProduct(""); //resets the product state variable to an empty string, which clears the input field.
    setPrice("");
  }

  /*This function is called whenever the input field value changes. 
  It updates the product state variable with the new value entered by the user. */
  const handleProductChange = (e) => {
    setProduct(e.target.value);
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  }

  const handleDetailsClick = (product) => {
    setShowDetails(product);
  }

  const handleCloseClick = () => { 
    setShowDetails(false);
    setProduct("");
    setPrice("");
  }

  const handleRemoveClick = (productId) => { 
    setCart(cart.filter(product => product.id !== productId));
  }

  const handleAddToCart = (product) => { 
    setCart([...cart, product]);
  }

  return (
    <div className="App">
      <h3 className="heading">Add Product</h3>
      <div className="form-container">
        <input type="text" value={product} placeholder='Product Name' onChange={handleProductChange}/><br />
        <input type="number" value={price} placeholder='Price' onChange={handlePriceChange}/><br />
        <button className="add-button" onClick={handleAddProduct}>Add Product</button>
      </div>
      
      <ul  className="product-list">
        {productsList.map((product) => (
          <li key={product.id} className="product-item">
            <span className="product-name">{product.name}</span>
            <button className="detail-button" onClick={() => handleDetailsClick(product)}>Details</button>
          </li>
        ))}
      </ul>

      {showDetails && (
        <div className="detail-container">
          <h4 className="detail-heading">Product Details</h4>
          <p className="detail-name">{showDetails.name}</p>
          <p className="detail-price">{showDetails.price}€</p>
          <button className="add-to-cart-button" onClick={() => handleAddToCart(showDetails)}>Add to Cart</button>
          <button className="close-button" onClick={handleCloseClick}>Close</button>
        </div>
      )} 

      <div className="cart-container">
        <h4 className="cart-heading">My Shopping Cart</h4>
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

    </div>
  );
}

export default App;

