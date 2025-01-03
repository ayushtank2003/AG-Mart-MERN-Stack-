import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Index as Route } from "./routes/index";
import { BrowserRouter } from 'react-router-dom';
import "./custom.styles.css";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from './contexts/authContext/AuthContext';
import CartProvider from './contexts/cartContext/CartContext';
import ProductsContextProvider from './contexts/productsContext/ProductsContext'; 

import WishlistProvider from './contexts/wishlistContext/WishlistContext';


const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ProductsContextProvider>
          <CartProvider>
            <WishlistProvider>
              <ToastContainer hideProgressBar theme="dark" autoClose={2000} />
              <Route />
            </WishlistProvider> 
          </CartProvider>
        </ProductsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
    
  );
};

export default App;
