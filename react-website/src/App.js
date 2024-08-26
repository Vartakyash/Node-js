import React from 'react';
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Contact from './Contact';
import Website from './Website';
import './App.css'; // Create and import a CSS file for styling


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Website/>}/>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Skills" element={<Skills/>} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/Experience" element={<Experience/>} />
          <Route path="/contact" element={<Contact/>} />
          </Routes>
      </div>
    </Router>
  );
};

export default App;