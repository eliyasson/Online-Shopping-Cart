import React, { useState } from 'react'; //These lines import the necessary modules
import './App.css';

function App() { //This declares a functional component named App.

  //state variables using the useState hook:
  const [product, setProduct] = useState(""); //product: stores the current value of the input field for the product name.
  const [productsList, setProductsList] = useState([]); //store the list of products as an array

  //Create a function to handle the button click event that will add the new product to the list:
  /*This function is called when the "Add Product" button is clicked. 
  It updates the productsList state variable by adding the current value of product to the end of the array.*/
  const handleAddProduct = () =>{
    setProductsList([...productsList, product]);
    setProduct(""); //resets the product state variable to an empty string, which clears the input field.
  }

  /*This function is called whenever the input field value changes. 
  It updates the product state variable with the new value entered by the user. */
  const updateChange =(e)=> {
    setProduct(e.target.value);
  }


  return (
    <div className="App">
      <h3>Online Shopping Cart</h3>
      <input type='text' value={product} onChange={updateChange}></input>
      <br />
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {productsList.map((product) =>{
          return <li>{product}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

