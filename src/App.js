import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Legal from './Components/Legal/Legal';
import Blog from './Components/Blog/Blog';
import Ngo from './Components/Ngo/Ngo';



function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/legal' element={<Legal></Legal>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/ngo' element={<Ngo></Ngo>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
