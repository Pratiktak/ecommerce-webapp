import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "white",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
      }}
    >
      <h2 style={{ cursor: "pointer" }} onClick={() => navigate("/home")}>
        MyStore
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link to="/home">Home</Link>

        <Link to="/store">Store</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

        <Link to="/support">Support Us</Link>

        <Link to="/report">Report Problem</Link>

        <Link to="/partner">Become A Partner</Link>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}