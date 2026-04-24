import {Card,Register,Header,Store,Login} from "./Components"
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
      <Route path=""></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
