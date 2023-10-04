import Home from './components/Home.jsx'
import './App.css'
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Error from "./components/Error.jsx";
import Customers from "./components/Customers.jsx";
import Orders from "./components/Orders.jsx";
import Order_details from "./components/Order_details.jsx";

import Details from "./components/Details.jsx";

function App() {
  return (
      <BrowserRouter>
          <Header>
        <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/customers" element={<Customers/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/order_details/:id" element={<Order_details/>} />

            <Route path="/details/:id" element={<Details/>} />
        </Routes>
              </Header>
      </BrowserRouter>
  )
}

export default App
