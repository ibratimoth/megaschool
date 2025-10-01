import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Products />
                <WhyChoose />
                <Contact />
              </>
            } />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;