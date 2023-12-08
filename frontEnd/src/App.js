import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./Pages/home/HomePage";
import Cart from "./Pages/cart/Cart"
import BookPage from "./Pages/book/BookPage"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />


        <Route path="/cart" element={<Cart/>}/>
        <Route path="/book/:id" element={<BookPage/>}/>

<Route path="/cart" element={<Cart/>}/>
        
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
