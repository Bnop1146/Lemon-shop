import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Cart from './features/cart/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



import './App.css';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Cart" element={<Cart />} /> 
        </Routes>
      </Router>

        
       
        
        
      
    </div>
  );
}

export default App;
