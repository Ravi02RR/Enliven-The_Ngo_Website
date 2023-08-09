import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Legal from './Components/Legal/Legal';
import Blog from './Components/Blog/Blog';
import Ngo from './Components/Ngo/Ngo';
import Contact from './Components/Contact/Contact';
import Faqhome from './Components/Faqpage/Faqhome';
import New from './Components/Faqpage/New';
import Reply from './Components/Faqpage/Reply';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/legal' element={<Legal></Legal>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/ngo' element={<Ngo></Ngo>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path="/question" element={<Faqhome />} />
        <Route path="/new" element={<New />} />
        <Route path="/view/:id" element={<Reply />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
