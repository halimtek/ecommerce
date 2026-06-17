import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Laptops } from './Pages/Laptops';
import { Desktops } from './Pages/Desktops';
import { Accessories } from './Pages/Accessories';
import { Monitors } from './Pages/Monitors';
import { Tablets } from './Pages/Tablets';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import Footer from './Components/Footer/Footer';

// Every route below corresponds 1:1 with a link in the Navbar
// (Components/Navbar/Navbar.jsx). Add a new <li> there and a
// matching page + <Route> here to extend the menu.
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/laptops' element={<Laptops />} />
          <Route path='/desktops' element={<Desktops />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/monitors' element={<Monitors />} />
          <Route path='/tablets' element={<Tablets />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
