import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
// import Nav from './components/Nav';
import Home from './components/Home';
import Booking from './components/Booking';
import Payment from './components/Payment';
import About from './components/About';
import Contact from './components/Contact';
import Book1 from './components/book1';
import Book2 from './components/book2';
import Book3 from './components/book3';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/book1" element ={<Book1/>}/>
          <Route path="/book2" element ={<Book2/>}/>
          <Route path="/book3" element ={<Book3/>}/>
          <Route path="/payment" element={<Payment/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;

