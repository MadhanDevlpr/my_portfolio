import React from 'react';
import './css/style.css';

import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer'
import { BrowserRouter as Router,Route, Link, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Loader />
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/projects"  element={<Projects/>}/>
        <Route path="/contact"  element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;

