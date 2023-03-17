import React, { useState } from 'react'; //These lines import the necessary modules
import './App.css';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import ShowDetail from './ShowDetail';
import CartList from './CartList';

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

      <AddProduct product={product} price={price} handleProductChange={handleProductChange} handlePriceChange={handlePriceChange} handleAddProduct={handleAddProduct}/>
      <ProductList productsList={productsList} handleDetailsClick={handleDetailsClick} /> 
      <ShowDetail showDetails={showDetails} handleAddToCart={handleAddToCart} handleCloseClick={handleCloseClick}/>
      <CartList cart={cart} handleRemoveClick={handleRemoveClick}/>


    </div>
  );
}

export default App;

