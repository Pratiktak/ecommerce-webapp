import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import ProtectedRoute from "./routes/ProtectedRoute";
import Store from "./pages/Store";
import Support from "./pages/Support";
import Report from "./pages/Report";
import Partner from "./pages/Partner";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />

      <Route path="/success" element={<Success />} />

      <Route path="*" element={<Navigate to="/home" />} />
      <Route path="/store" element={<Store />} />

<Route path="/support" element={<Support />} />

<Route path="/report" element={<Report />} />
<Route path="/partner" element={<Partner />} />
    </Routes>
  );
}