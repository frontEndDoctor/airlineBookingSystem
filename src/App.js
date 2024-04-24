import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
// import Nav from './components/Nav';
import Home from './components/Home';
import Booking from './components/Booking';
import Payment from './components/Payment';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

