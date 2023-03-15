import React, { useState } from 'react'; //These lines import the necessary modules
import './App.css';

function App() { //This declares a functional component named App.

  //state variables using the useState hook:
  const [product, setProduct] = useState(""); //product: stores the current value of the input field for the product name.
  const [productsList, setProductsList] = useState([]); //store the list of products as an array
  const [price, setPrice] = useState("");
  
  const [showDetails, setShowDetails] = useState();
  const [cartItems, setCartItems] = useState([]);

  //Create a function to handle the button click event that will add the new product to the list:
  /*This function is called when the "Add Product" button is clicked. 
  It updates the productsList state variable by adding the current value of product to the end of the array.*/
  const handleAddProduct = () =>{
    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      name: product,
      price: price
    };
    setProductsList([...productsList, newProduct]);
    setProduct(""); //resets the product state variable to an empty string, which clears the input field.
    setPrice("");
  }

  /*This function is called whenever the input field value changes. 
  It updates the product state variable with the new value entered by the user. */
  const updateChange =(e)=> {
    if(e.target.name === "product"){
      setProduct(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    } 
  }

  /* const deleteButton = (item) => {

    const newArray = productsList.filter((product) => product !== item);
    setProductsList(newArray);
  } */

  const detailsClick = (product) =>{
      setShowDetails(product);
      
  }

  const handleAddToCartClick = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    setShowDetails(false);
  };


  return (
    <div className="App">
      <h3>Online Shopping Cart</h3>
      <div>
        <input type='text' name="product" value={product} onChange={updateChange}></input>
        <input type='text' name="price" value={price} onChange={updateChange}></input>
        <br />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
      
      <ul>
        {productsList.map((product) =>{
          return <li>{product.name}
          <button onClick={() => detailsClick(product)}>Details</button>
          </li>
        })}
      </ul>
      {showDetails &&
        <div>
          <h4>Detail</h4>
          <p>{showDetails.name}</p>
          <p>{showDetails.price}€</p>
          
          <button onClick={() => setShowDetails(false)}>Close</button>
        </div>
      }
    </div>
  );
}

export default App;

