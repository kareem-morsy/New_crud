import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import EditProduct from "./pages/EditProduct";

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
              <Route   path="products"   element={<Outlet/>}>
                <Route path=""           element={<Products/>}/>
                <Route path="add"        element={<AddProduct/>}/>
                <Route path=":productId" element={<ProductDetails/>}/>
                <Route path="Edit"       element={<Outlet/>} >
                  <Route path=":editproduct" element={<EditProduct/>}/>

                </Route>
              </Route>
            </Routes>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
