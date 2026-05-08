import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const handleOrder = () => {
    alert("Order placed successfully!");
    navigate("/success");
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Checkout</h1>

        <input
          type="text"
          placeholder="Enter Address"
          style={{
            width: "300px",
            padding: "10px",
            marginBottom: "20px",
          }}
        />

        <br />

        <select
          style={{
            width: "320px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <option>Cash On Delivery</option>
          <option>UPI</option>
          <option>Card</option>
        </select>

        <br />

        <button
          style={{
            padding: "12px 20px",
            fontSize: "16px",
          }}
          onClick={handleOrder}
        >
          Place Order
        </button>
      </div>
    </>
  );
}