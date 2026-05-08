import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Your Cart</h1>

        {cart.length === 0 ? (
          <h3>Cart is empty</h3>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "white",
                  padding: "20px",
                  marginBottom: "20px",
                  borderRadius: "10px",
                }}
              >
                <h2>{item.name}</h2>

                <p>₹{item.price}</p>

                <button onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            ))}

            <h2>Total: ₹{total}</h2>

            <button
              style={{
                padding: "12px 20px",
                fontSize: "16px",
                marginTop: "20px",
              }}
              onClick={() => navigate("/checkout")}
            >
              Proceed To Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
}