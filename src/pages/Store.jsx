import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Gaming Headphones",
    description: "Wireless gaming headphones with RGB lighting",
    price: 2499,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB mechanical keyboard for gamers",
    price: 3499,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description: "High precision gaming mouse",
    price: 1499,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
  },
  {
    id: 4,
    name: "Smart Watch",
    description: "Track your health and notifications on the go",
    price: 3999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    description: "Portable speaker with immersive sound quality",
    price: 1999,
    image: "https://images.unsplash.com/photo-1507878866276-a947ef722fee",
  },
  {
    id: 6,
    name: "Gaming Chair",
    description: "Comfortable ergonomic gaming chair",
    price: 8999,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28",
  },
  {
    id: 7,
    name: "4K Monitor",
    description: "Ultra HD display for gaming and productivity",
    price: 15999,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    description: "Crystal clear sound with active noise cancellation",
    price: 2999,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
  },
];

export default function Store() {
  return (
    <>
      <Navbar />

      <div className="page-wrapper">
        <h1 className="section-title">Store</h1>

        <p style={{ marginBottom: "20px", color: "#666" }}>
          Browse our latest gadgets and premium electronics.
        </p>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}