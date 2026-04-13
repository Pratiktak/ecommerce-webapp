import Login from "./Components/loginpage"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./Components/Register"
import './index.css'
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Register />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
