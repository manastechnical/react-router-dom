import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <Router>
      {<Nav/>}
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </Router>
  );
}

export default App;
