import { Card, Register, Header, Login, Partner, PartnerDashboard } from "./Components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Pages/Home";   
import Store from "./Pages/Store";
import Phone from "./Pages/Store/Phone";    
import Laptop from "./Pages/Store/Laptop";         
import ProductDetail from "./Pages/Store/ProductDetail";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/phones" element={<Phone />} />
        <Route path="/store/laptops" element={<Laptop />} />
        <Route path="/card" element={<Card />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/partner/dashboard" element={<PartnerDashboard />} />
        <Route path="/store/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;