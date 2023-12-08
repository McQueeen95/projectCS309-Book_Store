
import  "./App.css";
import Header from "./component/header/Header.jsx";
import Footer from "./component/footer/Footer.jsx";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import HomePage from "./Pages/home/HomePage.jsx"
import Authors from "./Pages/authors/Authors.jsx";
import About from"./Pages/about/About.jsx"
import ContactUs from "./Pages/contactus/ContactUs.jsx";
import Cart from "./Pages/cart/Cart.jsx";
import Login from "./Pages/login/Login.jsx";
import Register from "./Pages/register/Register.jsx";
import { Link } from "react-router-dom";
import BookPage from"./Pages/book/BookPage.jsx"
import React from "react";
import { books } from "./data/books.js";
// import BookPage from "./Pages/book/BookPage.jsx";
function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path="/" index element={<HomePage/>}/>
<Route  path="/home" element={<HomePage/>}/>
<Route  path="/authors" element={<Authors/>}/>
<Route  path="/about" element={<About/>}/>
<Route  path="/contactus" element={<ContactUs/>}/>
<Route  path="/cart" element={<Cart/>}/>
<Route  path="/login" element={<Login/>}/>
<Route  path="/register" element={<Register/>}/>
<Route  path="/book/:id" element={<BookPage/>}>
       
       
</Route>


        
      </Routes>
      <Footer/>
        </BrowserRouter>
     
  
  );


}

export default App;
