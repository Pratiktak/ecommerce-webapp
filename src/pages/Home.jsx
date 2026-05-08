import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="page-wrapper">
        <div className="hero-section">
          <h1>Welcome To MyStore</h1>

          <p>
            Discover premium gadgets, gaming accessories,
            electronics and much more.
          </p>

          <button
            style={{
              marginTop: "20px",
              padding: "14px 24px",
              borderRadius: "12px",
              background: "white",
              color: "#4f46e5",
              fontWeight: "bold",
              fontSize: "16px",
            }}
            onClick={() => navigate("/store")}
          >
            Explore Store
          </button>
        </div>

        <section style={{ marginBottom: "50px" }}>
          <h2 className="section-title">Featured Categories</h2>

          <div className="product-grid">
            <div className="product-card">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
                alt="Gaming"
              />

              <div className="product-info">
                <h2>Gaming</h2>

                <p>
                  Explore gaming accessories, keyboards, mice and more.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                alt="Technology"
              />

              <div className="product-info">
                <h2>Technology</h2>

                <p>
                  Modern gadgets and premium technology products.
                </p>
              </div>
            </div>

            <div className="product-card">
              <img
                src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
                alt="Laptops"
              />

              <div className="product-info">
                <h2>Laptops</h2>

                <p>
                  High performance laptops for work and gaming.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">Why Choose Us?</h2>

          <div className="product-grid">
            <div className="product-card">
              <div className="product-info">
                <h2>Fast Delivery</h2>

                <p>
                  Quick and secure shipping across multiple locations.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-info">
                <h2>Secure Payments</h2>

                <p>
                  Safe payment methods with trusted checkout systems.
                </p>
              </div>
            </div>

            <div className="product-card">
              <div className="product-info">
                <h2>Trusted Sellers</h2>

                <p>
                  Verified partners and authentic products.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}