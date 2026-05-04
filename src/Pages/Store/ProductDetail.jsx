import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Header } from "../../Components";
import { phones } from "./products";
import "../../index.css";

const allProducts = [...phones]; // add laptops here later

export default function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));
  const [added, setAdded] = useState(false);

  if (!product) return <h2 style={{ textAlign: "center", marginTop: "40px" }}>Product not found</h2>;

  const handleBuy = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <Header />
      <div style={{ maxWidth: "700px", margin: "40px auto", padding: "24px" }}>
        <Link to="/store/phones" style={{ fontSize: "14px", color: "#0071e3" }}>← Back to Phones</Link>
        <div style={{ display: "flex", gap: "40px", marginTop: "24px", flexWrap: "wrap" }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "300px", height: "350px", objectFit: "contain", borderRadius: "18px", background: "#f5f5f7", padding: "16px" }}
          />
          <div style={{ flex: 1, minWidth: "200px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "12px" }}>{product.name}</h1>
            <p style={{ color: "#6e6e73", lineHeight: "1.6", marginBottom: "24px" }}>{product.description}</p>
            <span style={{ fontSize: "28px", fontWeight: "700", color: "#0071e3" }}>${product.price.toFixed(2)}</span>
            <br /><br />
            <button
              onClick={handleBuy}
              style={{
                background: added ? "#34c759" : "#0071e3",
                color: "white",
                border: "none",
                borderRadius: "10px",
                padding: "14px 32px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.3s ease",
                width: "100%"
              }}
            >
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}