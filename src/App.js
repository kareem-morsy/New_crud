import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  

  return (
    <>
      <Navbar/>
      <div className="Home-container">
        <div className="row">
          <div className="col-md-2">
              <div className="sidebar">
                <Sidebar/>
              </div>
          </div>

          <div className="col-md-10">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/products" element={<Products/>} />
            </Routes>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
