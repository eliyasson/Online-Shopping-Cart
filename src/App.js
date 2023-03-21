import React, { useState } from 'react';
import './App.css';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import ShowDetail from './ShowDetail';
import CartList from './CartList';

function App() { 

  const [productsList, setProductsList] = useState([]);
  const [priceList, setPriceList] = useState([]);
  const [detailProduct, setDetailProduct] = useState(false);
  const [cart, setCart] = useState([]);

   const handleAddProduct = (product, price) => {
    if (!product || !price) {
      alert('Please enter both item and price.');
      return;
    }

    const newProduct = {
      id: Math.floor(Math.random() * 1000),
      name: product,
      price: price
    };

    setProductsList([...productsList, newProduct]);
  }

  const handleDetailsClick = (product) => {
    setDetailProduct(product);
  }

  const handleCloseClick = () => { 
    setDetailProduct(false);
  }

  const handleRemoveClick = (productId) => { 
    setCart(cart.filter(product => product.id !== productId));
  }

  const handleAddToCart = (product) => { 
    setCart([...cart, product]);
    setDetailProduct(false);
  }

  const handleDeleteProduct = (id) => {
    setProductsList(productsList.filter(item => item.id !== id));
    setPriceList(priceList.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <AddProduct handleAddProduct={handleAddProduct}/>
      <ProductList productsList={productsList} handleDetailsClick={handleDetailsClick} handleDeleteProduct={handleDeleteProduct}/> 
      <ShowDetail detailProduct={detailProduct} handleAddToCart={handleAddToCart} handleCloseClick={handleCloseClick}/>
      <CartList cart={cart} handleRemoveClick={handleRemoveClick}/>
    </div>
  );
}

export default App;