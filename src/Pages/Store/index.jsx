import { Link } from "react-router-dom";
import { Header } from "../../Components";
import Xiaomi17U from "../../Components/Images/Xiaomi17U.jpg";
import "../../index.css";
import { useCart } from "../../CartContext";
import CartSidebar from "../../Components/CartSidebar";

const mockProducts = [
  {
    id: 1,
    name: "MacBook Pro 14",
    price: 1999.99,
    description: "Apple M3 chip, 18GB RAM, 512GB SSD. Built for pros who push boundaries.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=400&hei=300&fmt=jpeg&qlt=90",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 1099.99,
    description: "Titanium design, A17 Pro chip, and a 48MP camera system.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=400&hei=300&fmt=jpeg&qlt=90",
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249.99,
    description: "Active noise cancellation, Adaptive Audio, and up to 6 hrs battery.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=400&hei=300&fmt=jpeg&qlt=90",
  },
  {
    id: 4,
    name: "iPad Air",
    price: 599.99,
    description: "M1 chip, 10.9-inch Liquid Retina display, all-day battery life.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=400&hei=300&fmt=jpeg&qlt=90",
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 399.99,
    description: "Advanced health sensors, S9 chip, and a stunning always-on display.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQDY3ref_VW_34-20230828150556?wid=400&hei=300&fmt=jpeg&qlt=90",
  },
  {
    id: 6,
    name: "Mac Mini",
    price: 699.99,
    description: "Compact powerhouse with M2 chip and up to 24GB unified memory.",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mac-mini-hero-202301?wid=400&hei=300&fmt=jpeg&qlt=90",
  },
  {
    id: 7,
    name: "Xiaomi 17 Ultra",
    price: 2000.00,
    description: "Latest flagship smartphone from Xiaomi with cutting-edge features.",
    image: Xiaomi17U,
  }
];

export default function Store() {
  const { addToCart } = useCart(); // ← replaces all the local cart state

  return (
    <>
      <Header />

      <div id="product-page">
        <h1 id="product-heading">Our Products</h1>
        <div id="product-grid">
          {mockProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-img-wrap">
                <img src={product.image} alt={product.name} className="product-img" />
              </div>
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-desc">{product.description}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price.toFixed(2)}</span>
                  <button className="product-add-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CartSidebar /> {/* ← replaces all the old cart button + sidebar JSX */}
    </>
  );
}