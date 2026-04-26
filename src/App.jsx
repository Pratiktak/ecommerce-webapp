//import {Card,Register,Header,Store,Login, Partner, PartnerDasboard} from "./Components"
import { Card, Register, Header, Store, Login, Partner, PartnerDashboard } from "./Components";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from "./Pages";
import './index.css'
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />}/>
      <Route path="/home" element={< Home />}/>
      <Route path="/store" element={<Store />}/>
      <Route path="/card" element={<Card />}/>
      <Route path="/partner" element={<Partner />} />
      <Route path="/partner/dashboard" element={<PartnerDashboard />} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
