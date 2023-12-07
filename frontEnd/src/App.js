import './App.css';
import React from "react";
import AddBook from "./component/admin/AddBook";
import './component/header/Header.jsx';
// import about from "./component/header/About";
import Header from './component/header/Header.jsx';
import About from './data/About.js';
import { Routes,Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <di>

<Header/>
</di>
    <main> <BrowserRouter>
    <Routes>
    <Route path="/add" element={<AddBook />} exact />
    <Route path="/about" element={<About />} exact />
    </Routes>
  </BrowserRouter>
  </main>
  </React.Fragment>
      

 );
}

export default App;
